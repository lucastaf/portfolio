"use client";
import { Box, Divider, Typography } from "@mui/material";
import Knowledges from "../components/pagesComponents/Knowledges";
import Experiences from "../components/pagesComponents/Experiences";
import { useEffect, useState } from "react";
import { dataStatus, experience, knowledge } from "../components/dataTypes";
import axios from "axios";

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
function ExperiencesPage() {
  const [experiencesData, setExperiencesData] = useState<experienceStateType>({
    companies: [],
    education: [],
    status: "loading",
  });
  const [knowledgesData, setKnowledgesData] = useState<knowledgesStateType>({
    languages: [],
    frameworks: [],
    others: [],
    status: "loading",
  });
  useEffect(() => {
    axios
      .get("/api/experiences")
      .then((res) => {
        const data: experience[] = res.data;
        setExperiencesData({
          companies: data.filter((item) => item.type == "emprego"),
          education: data.filter((item) => item.type == "educacao"),
          status: "success",
        });
      })
      .catch((e) => {
        setExperiencesData((prevStatus) => {
          prevStatus.status = "error";
          return prevStatus;
        });
      });
    axios
      .get("/api/knowledges")
      .then((res) => {
        const data: knowledge[] = res.data;
        setKnowledgesData({
          languages: data.filter((item) => item.type == "Linguagem"),
          frameworks: data.filter((item) => item.type == "Framework"),
          others: data.filter(
            (item) => !item.type?.match(/(.*Linguagem|.*Framework)/)
          ),
          status: "success",
        });
      })
      .catch(() => {
        setKnowledgesData((prevStatus) => {
          prevStatus.status = "error";
          return prevStatus;
        });
      });
  }, []);

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
      <Divider />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Meus Conhecimentos:
      </Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Linguagens:
      </Typography>
      <Knowledges knowledges={knowledgesData?.languages} status={knowledgesData.status} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Frameworks:
      </Typography>
      <Knowledges knowledges={knowledgesData?.frameworks} status={knowledgesData.status} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Outros conhecimentos:
      </Typography>
      <Knowledges knowledges={knowledgesData?.others} status={knowledgesData.status} />
    </Box>
  );
}

export default ExperiencesPage;
