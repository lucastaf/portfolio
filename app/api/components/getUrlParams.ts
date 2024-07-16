import { sheetsFilter } from "./getSheetTab";

function getUrlFilter(url: string): sheetsFilter {
    const urlObject = new URL(url);
    const requestParams = new URLSearchParams(urlObject.searchParams);
    let params: sheetsFilter | any = {};
    requestParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }

export default getUrlFilter

