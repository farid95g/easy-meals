import React from "react";
import SocialLinks from "./../../SocialLinks/SocialLinks";
import classes from "./MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <div>
          <ul className={classes.leftMenu}>
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
        <SocialLinks />
      </div>
    </nav>
  );
}

export default MainNavbar;