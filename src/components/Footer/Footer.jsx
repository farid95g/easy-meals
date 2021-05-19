import React from 'react';
import classes from "./Footer.module.css";
import SocialLinks from "./../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialLinks />
    </footer>
  );
}

export default Footer;