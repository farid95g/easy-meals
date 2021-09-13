import React from 'react';
import classes from "./Main.module.css";
import Meal from "./../Meal/Meal";
import img from "./../../assets/images/h2-img-1.jpg";

const Main = () => {
  return (
    <main className={classes.main}>
      <h3>Main</h3>
      <Meal background={img} />
    </main>
  );
}

export default Main;