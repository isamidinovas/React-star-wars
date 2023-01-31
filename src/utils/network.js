import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет UTL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} -Url с HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * отправляет запрос Fetch
 * @param {String} url
 * @returns {Promise} с результатаом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fetch", error.message);
    return false;
  }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));
// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
