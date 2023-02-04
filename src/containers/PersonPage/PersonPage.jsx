import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helper/withErrorApi";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import styles from "./PersonPage.module.css";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

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
          <PersonPhoto personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
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
