import { Divider, Typography } from "@mui/material";
import AboutMe from "./components/homeComponents/AboutMe";
import Title from "./components/homeComponents/Title";
import ExperienceAreas from "./components/pagesComponents/Knowledges";
import { dataStatus, knowledge } from "./components/dataTypes";
import getSheetTab from "./api/components/getSheetTab";
//Lembrar de fazer:
//Experiencias profissionais
//Projetos pessoais
//Sobre mim
//Timeline
export default async function Home() {
  const [KnowledgesData, dataStatus]: [knowledge[], dataStatus] =
    await getData();

  return (
    <>
      <Title />
      <Divider sx={{ my: 5 }} />
      <Typography variant="h4" marginBottom={2}>
        Experiência em:
      </Typography>
      <ExperienceAreas knowledges={KnowledgesData} status={dataStatus} />
      <Divider sx={{ my: 5 }} />
      <AboutMe />
    </>
  );
}

async function getData(): Promise<[knowledge[], dataStatus]> {
  try {
    const resAxios = await getSheetTab("knowledge", {
      type: "Linguagem",
    });

    return [resAxios.data, "success"];
  } catch (e) {
    return [[], "error"];
  }
}
