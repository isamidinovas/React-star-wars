import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router";

import { withErrorApi } from "../../hoc-helper/withErrorApi";

import styles from "./PersonPage.module.css";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/Ui/UiLoading";

import { API_PERSON } from "../../constants/api";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { useSelector } from "react-redux";

const PersonFilms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFilms")
);
const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);
  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      setPersonId(id);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);
        // res.files;
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>;
        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="white" isShadow />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};
PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
};

export default withErrorApi(PersonPage);
