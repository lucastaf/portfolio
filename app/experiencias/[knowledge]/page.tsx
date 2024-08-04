import {
  dataStatus,
  experience,
  knowledge,
  project,
} from "@/app/components/dataTypes";
import Projects from "@/app/components/pagesComponents/Projects";
import Experiences from "@/app/components/pagesComponents/Experiences";
import { Box, Divider } from "@mui/material";
import getSheetTab from "@/app/api/components/getSheetTab";
import KnowledgeHeader from "../../components/pagesComponents/knowledgeHeader";

async function DynamicKnowledge({ params }: { params: { knowledge: string } }) {
  const { knowledge } = params;
  const [projectData, experienceData, knowledgeData, dataStatus] =
    await getDynamicKnowledgesData(knowledge);

  return (
    <Box>
      <KnowledgeHeader knowledgeData={knowledgeData} />
      <Experiences experiences={experienceData} status={dataStatus} />
      {projectData.length && experienceData.length ? (
        <Divider sx={{ my: 5 }} />
      ) : (
        <></>
      )}
      <Projects projects={projectData} status={dataStatus} />
    </Box>
  );
}

async function getDynamicKnowledgesData(
  knowledge: string
): Promise<[project[], experience[], knowledge, dataStatus]> {
  try {
    const projectData = await getSheetTab("projects", {
      knowledges:
        '"' +
        decodeURIComponent(knowledge).replace(
          /[-[\]{}()*+?.,\\^$|#\s]/g,
          "\\$&"
        ) +
        '"',
    });
    const experienceData = await getSheetTab("experiences", {
      knowledges:
        '"' +
        decodeURIComponent(knowledge).replace(
          /[-[\]{}()*+?.,\\^$|#\s]/g,
          "\\$&"
        ) +
        '"',
    });
    const knowledgeIcon = await getSheetTab("knowledge", {
      name:
        "^" +
        decodeURIComponent(knowledge).replace(
          /[-[\]{}()*+?.,\\^$|#\s]/g,
          "\\$&"
        ) +
        "$",
    });

    return [projectData, experienceData, knowledgeIcon[0] ?? {}, "success"];
  } catch {
    return [[], [], {} as knowledge, "error"];
  }
}

export default DynamicKnowledge;
