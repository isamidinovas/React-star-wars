import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import LoaderBlack from "./img/loader-black.svg";
import LoaderWhite from "./img/loader-white.svg";
import LoaderBlue from "./img/loader-blue.svg";
import styles from "./UiLoading.module.css";
const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(LoaderBlack);
        break;
      case "white":
        setLoaderIcon(LoaderWhite);
        break;
      case "blue":
        setLoaderIcon(LoaderBlue);
        break;
      default:
        setLoaderIcon(LoaderWhite);
    }
  }, []);
  return (
    <img
      src={loaderIcon}
      alt="loader"
      className={cn(styles.loader, isShadow && styles.shadow)}
    />
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;
