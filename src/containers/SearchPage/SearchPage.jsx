import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { withErrorApi } from "../../hoc-helper/withErrorApi";
import { getApiResource } from "../../utils/network";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { API_SEARCH } from "../../constants/api";
import styles from "./SearchPage.module.css";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "../../components/Ui/UiInput";
const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getRespons = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          img,
          name,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  //Отображет персонажи по дефоулту
  useEffect(() => {
    getRespons("");
  }, []);

  //Делаем один рапрос за 3сек
  const debouncedGetRespons = useCallback(
    debounce((value) => getRespons(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetRespons(value);
  };

  return (
    <div>
      <h1 className={styles.header__text}>Search</h1>
      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="input charcters`s name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
