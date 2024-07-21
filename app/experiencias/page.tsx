"use client";
import { Box, Divider, Typography } from "@mui/material";
import KnowledgesComponent from "../components/pagesComponents/knowledgesComponent";
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
function Knowledges() {
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
    axios.get("/api/experiences").then((res) => {
      throw "deu ruim" 
      const data: experience[] = res.data;
      setExperiencesData({
        companies: data.filter((item) => item.type == "emprego"),
        education: data.filter((item) => item.type == "educacao"),
        status: "success"
      })
    }).catch(e=>{
      setExperiencesData(prevStatus => {
        prevStatus.status = "error"
        return prevStatus
      })
    })
    axios.get("/api/knowledges").then((res) => {
      const data: knowledge[] = res.data;
      setKnowledgesData({
        languages: data.filter((item) => item.type == "Linguagem"),
        frameworks: data.filter((item) => item.type == "Framework"),
        others: data.filter(
          (item) => !item.type?.match(/(.*Linguagem|.*Framework)/)
        ),
        status: "success"
      });
    });
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Experiências Profissionais:
      </Typography>
      <Experiences experiences={experiencesData?.companies} status={experiencesData.status} />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Formação:
      </Typography>
      <Experiences experiences={experiencesData?.education} status={experiencesData.status} />
      <Divider />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Meus Conhecimentos:
      </Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Linguagens:
      </Typography>
      <KnowledgesComponent knowledges={knowledgesData?.languages} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Frameworks:
      </Typography>
      <KnowledgesComponent knowledges={knowledgesData?.frameworks} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Outros conhecimentos:
      </Typography>
      <KnowledgesComponent knowledges={knowledgesData?.others} />
    </Box>
  );
}

export default Knowledges;
