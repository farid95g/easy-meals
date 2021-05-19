import React from "react";
import classes from "./MainNavbar.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

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
        <div className={classes.socialLinks}>
          <ul>
            <li>
              <a href="https://www.instagram.com/" target="blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="blank">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://rss.com/" target="blank">
                <FaRss />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="blank">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;