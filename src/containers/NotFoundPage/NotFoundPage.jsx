import React from "react";
import img from "./img/notFound.png";
import styles from "./NotFoundPage.module.css";
import { useLocation } from "react-router";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <img src={img} alt="not found" className={styles.img} />
      <p className={styles.text}>
        No match fot <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
