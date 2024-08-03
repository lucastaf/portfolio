import { Box } from "@mui/material";
import { dataStatus, project } from "../components/dataTypes";
import Projects from "../components/pagesComponents/Projects";
import getSheetTab from "../api/components/getSheetTab";

async function Projetos() {
  const [data, dataStatus] = await getProjectPageData();

  return (
    <Box>
      <Projects projects={data} status={dataStatus} />
    </Box>
  );
}

async function getProjectPageData(): Promise<[project[], dataStatus]> {
  try {
    const projectData = await getSheetTab("projects");
    return [projectData, "success"];
  } catch {
    return [[], "error"];
  }
}

export default Projetos;
