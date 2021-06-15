import { useState, useMemo, FC } from "react";
import axios from "axios";

import Form from "../../UI/Form/Form";
import ForecastItem from "../../ForecastItem/ForecastItem";
import classes from "./Forecast.module.css";
import { Forecast as ForecastResponse } from "../../../types";

const Forecast: FC = () => {
  const [weather, setWeather] = useState<Array<ForecastResponse>>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  //In best practice the API cay should be places in .env file, that is not in repo, for security porposes.
  const apiKey = "38e555c92f3e971118c5a8f7abed577d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=metric`;

  //Submit function and fetch data from API using axios
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    axios
      .get(apiUrl)
      .then((response) => {
        setLocationError(false);
        setWeather(response.data.list);
      })
      .catch((error) => {
        switch (error.response.data.cod) {
          case '400':
            setError(true);
            break;
          case '404':
            setLocationError(true);
            break;
        }
        setWeather([]);
      });
  };

  //Handle change in form.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  //Cases when we have error with city or API.
  const errorMsg = error && (
    <div className={classes.error}>Something went wrong!</div>
  );
  const notFound = locationError && (
    <div className={classes.error}>The city not found! Please check input.</div>
  );

  //useMemo hook usage example. If the input dont changes in 3 sec it return memorized value.
  const expensiveFunction = useMemo((): Promise<string> => {
    const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(input);
      }, 3000);
    });
    return promise;
  }, [input]);
  console.log(expensiveFunction);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Weather Forecast</h1>
      <Form
        input={input}
        handleChange={handleChange}
        submitHandler={submitHandler}
      />
      <div className={classes.cardContainer}>
        {errorMsg}
        {notFound}
        { weather &&
          weather.map((item, index) => {
            if (item.dt_txt.includes("12:00:00")) {
              return (
                <ForecastItem
                  key={index}
                  highTemp={item.main.temp_max}
                  lowTemp={item.main.temp_min}
                  icon={item.weather[0].icon}
                  alt={item.weather[0].main}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Forecast;
