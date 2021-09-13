import React from "react";
import styles from "./Meal.module.css";
import { BsClock } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Meal = (props) => {
  return (
    <div className={styles.meal}>
      <div className={styles.background}>
        <img src={props.background} />
      </div>
      <div className={styles.description}>
        <div className={styles.info}>
          <span className={styles.time}>
            <BsClock />
            <span>30 MINUTES</span>
          </span>
          <span className={styles.difficulty}>
            <BiLike />
            <span>SUPER EASY</span>
          </span>
        </div>
        <p>
          7 easy bruschetta recipes that look fancy
        </p>
      </div>
    </div>
  )
}

export default Meal;