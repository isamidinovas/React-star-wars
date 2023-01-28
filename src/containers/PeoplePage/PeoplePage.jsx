import styles from "./PeoplePage.module.css";
import { getApiResource } from "../../utils/network";
import { useEffect } from "react";
import { API_PEOPLE } from "../../constants/api";
import { useState } from "react";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  // const [errorApi, setErrorApi] = useState(false);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      <h2>Navigation</h2>
      <>{people && <PeopleList people={people} />}</>
    </>
  );
};

// return (
//   <>
//     {errorApi ? (
//       <h2>Error Api</h2>
//     ) : (
//       <>{people && <PeopleList people={people} />}</>
//     )}
//   </>
// );
// };

export default PeoplePage;
