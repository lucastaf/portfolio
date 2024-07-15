import axios from "axios";
import { NextRequest } from "next/server";

export type SheetApiRequest = NextRequest & {
  headers: sheetsFilter;
};

type sheetsFilter = {
  name?: string;
  icon?: string;
  affinity?: string;
  type?: string;
  description?: string;
  status?: string;
  knowledges?: string;
  time?: string;
  role?: string;
  location?: string;
  link?: string;
};

type apiArguments = {
  tab: "knowledge" | "projects" | "experiences" | "timeline";
  filters?: sheetsFilter;
};

export function getUrlParams(url: string): sheetsFilter {
  const urlObject = new URL(url);
  const requestParams = new URLSearchParams(urlObject.searchParams);
  let params: sheetsFilter | any = {};
  requestParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

export default async function getSheetTab(request: apiArguments) {
  console.log(request);
  const URL: string = process.env.PORTFOLIO_API_URL ?? "";
  return await axios.get(URL, {
    params: {
      tab: request.tab,
      filters: JSON.stringify(request.filters),
    },
  });
}
