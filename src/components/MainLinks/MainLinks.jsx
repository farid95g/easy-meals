import React from "react";
import classes from "./MainLinks.module.css";

const MainLinks = () => {
  return (
    <div className={classes.navMenu}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        <li>
          <a href="/forum">Forum</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default MainLinks;