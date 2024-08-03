import { sheetsFilter, sheetTab } from "./getSheetTab";

export default async function getSheetTabUncached(
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
      cache: "no-cache"
    }
  );
  return resApi.json();
}
