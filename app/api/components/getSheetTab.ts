import axios from "axios";

export type sheetsFilter = {
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

export type sheetTab =
  | "knowledge"
  | "projects"
  | "experiences"
  | "timeline"
  | "projectTypes";

export default async function getSheetTab(
  tab: sheetTab,
  filters?: sheetsFilter
) {
  const URL: string = process.env.PORTFOLIO_API_URL ?? "";
  const resApi = await fetch(
    URL +
      "?" +
      new URLSearchParams({
        tab: tab,
        ...(filters && { filter: JSON.stringify(filters) }),
      }).toString(),
    {
      next: {
        revalidate: 3600 * 6,
      },
    }
  );
  return resApi.json();
}
