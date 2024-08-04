import getSheetTab from "@/app/api/components/getSheetTab";
import { dataStatus, project } from "@/app/components/dataTypes";
import Projects from "@/app/components/pagesComponents/Projects";
import { Box, Typography } from "@mui/material";
async function ProjectsByType({ params }: { params: { type: string } }) {
  const { type } = params;
  const [data, dataStatus] = await getDynamicProjectsByType(type);

  return (
    <Box>
      {dataStatus == "success" && !data.length && (
        <Typography textAlign="center" variant="h4">
          Ainda não possuo nenhum projeto do tipo {type} para apresentar 😣
        </Typography>
      )}
      <Projects projects={data} status={dataStatus} />
    </Box>
  );
}

async function getDynamicProjectsByType(
  type: string
): Promise<[project[], dataStatus]> {
  try {
    const projects = await getSheetTab("projects", {
      type: type,
    });
    return [projects, "success"];
  } catch {
    return [[], "error"];
  }
}

export default ProjectsByType;
