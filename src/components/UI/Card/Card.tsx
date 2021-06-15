import React, { FC } from "react";

import classes from "./Card.module.css";

//General card component.
const Card: FC = (props) => {
  return <div className={classes.cardWrapper}>{props.children}</div>;
};

export default Card;
