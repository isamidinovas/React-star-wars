import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import bookMarkIcon from "./img/bookmark-solid.svg";
import styles from "./Favorite.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const [count, setCount] = useState();
  const storeData = useSelector((state) => state.favoriteReducer);
  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString.length > 2 ? setCount("...") : setCount(length);
  });

  return (
    <div className={styles.container}>
      <NavLink to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={bookMarkIcon} alt="favorites" />
      </NavLink>
    </div>
  );
};

export default Favorite;
