import { Divider, Typography } from "@mui/material";
import AboutMe from "./components/homeComponents/AboutMe";
import Title from "./components/homeComponents/Title";
import ExperienceAreas from "./components/pagesComponents/Knowledges";
import { dataStatus, knowledge, projectTypes } from "./components/dataTypes";
import getSheetTab from "./api/components/getSheetTab";

export default async function Home() {
  const [KnowledgesData, dataStatus, projectAreas]: [
    knowledge[],
    dataStatus,
    projectTypes[]
  ] = await getData();

  return (
    <>
      <Title />
      <Divider sx={{ my: 5 }} />
      <Typography variant="h4" marginBottom={2}>
        Experiência em:
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        Estrelas representam nível de afinidade, sendo 5 estrelas as
        linguagens que tenho mais experiência e 1 estrela linguagens que não estou muito abituado.
      </Typography>
      <ExperienceAreas knowledges={KnowledgesData} status={dataStatus} />
      <Divider sx={{ my: 5 }} />
      <AboutMe Areas={projectAreas} />
    </>
  );
}

async function getData(): Promise<[knowledge[], dataStatus, projectTypes[]]> {
  try {
    const resKnowledge = await getSheetTab("knowledge", {
      type: "Linguagem",
    });
    const resAreas = await getSheetTab("projectTypes");

    return [resKnowledge, "success", resAreas];
  } catch {
    return [[], "error", []];
  }
}
