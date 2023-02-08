import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions/index";
import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          className={styles.favorite}
          alt="favorite"
        />
      </div>
    </>
  );
};
PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  setPersonFavorite: PropTypes.func,
  personFavorite: PropTypes.bool,
};

export default PersonPhoto;
