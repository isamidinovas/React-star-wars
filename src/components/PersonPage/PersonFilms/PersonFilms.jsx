import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeCorrentRequest, changeHTTP } from "../../../utils/network";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const respons = await makeCorrentRequest(filmsHTTPS);
      setFilmsName(respons);
    })();
  }, []);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__episode}>Episode{episode_id}</span>
              <span className={styles.list__colom}>:</span>
              <span className={styles.list__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
