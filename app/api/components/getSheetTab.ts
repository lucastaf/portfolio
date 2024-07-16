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

type sheetTab = "knowledge" | "projects" | "experiences" | "timeline";



export default async function getSheetTab(
  tab: sheetTab,
  filters?: sheetsFilter,
) {
  const URL: string = process.env.PORTFOLIO_API_URL ?? "";
  return await axios.get(URL, {
    params: {
      tab: tab,
      filters: JSON.stringify(filters),
    },
  });
}
