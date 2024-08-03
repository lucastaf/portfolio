import { Box, Divider, Typography } from "@mui/material";
import Knowledges from "../components/pagesComponents/Knowledges";
import Experiences from "../components/pagesComponents/Experiences";
import { dataStatus, experience, knowledge } from "../components/dataTypes";
import getSheetTab from "../api/components/getSheetTab";

async function ExperiencesPage() {
  const [experiencesData, knowledgesData]: [
    experienceStateType,
    knowledgesStateType
  ] = await getKnowledgePageData();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Experiências Profissionais:
      </Typography>
      <Experiences
        experiences={experiencesData?.companies}
        status={experiencesData.status}
      />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Formação:
      </Typography>
      <Experiences
        experiences={experiencesData?.education}
        status={experiencesData.status}
      />
      <Divider sx={{ mt: 2 }} />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Meus Conhecimentos:
      </Typography>
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        Linguagens:
      </Typography>
      <Knowledges
        knowledges={knowledgesData?.languages}
        status={knowledgesData.status}
      />
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        Frameworks:
      </Typography>
      <Knowledges
        knowledges={knowledgesData?.frameworks}
        status={knowledgesData.status}
      />
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        Outros conhecimentos:
      </Typography>
      <Knowledges
        knowledges={knowledgesData?.others}
        status={knowledgesData.status}
      />
    </Box>
  );
}

async function getKnowledgePageData(): Promise<
  [experienceStateType, knowledgesStateType]
> {
  try {
    const experiences: experience[] = (await getSheetTab("experiences")).data;
    const knowledges: knowledge[] = (await getSheetTab("knowledge")).data;
    return [
      {
        companies: experiences.filter((item) => item.type == "emprego"),
        education: experiences.filter((item) => item.type == "educacao"),
        status: "success",
      },
      {
        languages: knowledges.filter((item) => item.type == "Linguagem"),
        frameworks: knowledges.filter((item) => item.type == "Framework"),
        others: knowledges.filter(
          (item) => !item.type?.match(/(.*Linguagem|.*Framework)/)
        ),
        status: "success",
      },
    ];
  } catch {
    return [
      {
        companies: [],
        education: [],
        status: "error",
      },
      {
        frameworks: [],
        languages: [],
        others: [],
        status: "error",
      },
    ];
  }
}

type experienceStateType = {
  companies: experience[];
  education: experience[];
  status: dataStatus;
};

type knowledgesStateType = {
  languages: knowledge[];
  frameworks: knowledge[];
  others: knowledge[];
  status: dataStatus;
};

export default ExperiencesPage;
