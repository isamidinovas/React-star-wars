import React from "react";
import { useNavigate } from "react-router";
import iconBack from "./img/arrow-left.svg";
import styles from "./PersonLinkBack.module.css";
const PersonLinkBack = () => {
  const navigation = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigation(-1);
  };
  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} className={styles.link__img} alt="go back" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
