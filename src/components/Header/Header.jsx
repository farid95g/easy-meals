import React from "react";
import classes from "./Header.module.css";
import MainNavbar from "./MainNavbar/MainNavbar";
import TopNavbar from "./TopNavbar/TopNavbar";

const Header = () => {
  return (
    <header className={classes.header}>
      {/** top area navbar goes below */}
      <TopNavbar />

      {/** main navbar goes below */}
      <MainNavbar />
    </header>
  );
}

export default Header;