import React from "react";
import classes from "./TopNavbar.module.css";
import { FaRegSmile, FaRegUser } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <nav className={classes.topArea}>
      <div>
        <ul className={classes.topAreaLinks}>
          <li>
            <a href="/forums">Forums</a>
          </li>
          <li>
            <a href="/desserts">Desserts</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
          <li>
            <a href="/all-recipes">All Recipes</a>
          </li>
          <li>
            <a href="/popular">Popular</a>
          </li>
        </ul>
      </div>
      <div className={classes.login}>
        <ul>
          <li>
            <a href="/register">
              <FaRegSmile />Register
            </a>
          </li>
          <li>
            <a href="/login">
              <FaRegUser />Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavbar;