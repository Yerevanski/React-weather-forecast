import React, { FC } from "react";

import Card from "../UI/Card/Card";

interface ForecastItemProps {
  alt: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
}

const ForecastItem: FC<ForecastItemProps> = ({
  alt,
  icon,
  highTemp,
  lowTemp,
}) => (
  <Card>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={alt}
      title={alt}
    />
    <div>
      High Temp: <b>{highTemp}&deg; C</b>
    </div>
    <div>
      Low Temp: <b>{lowTemp}&deg; C</b>
    </div>
  </Card>
);

export default ForecastItem;
