"use client";
import { Divider, Typography } from "@mui/material";
import AboutMe from "./components/homeComponents/AboutMe";
import Title from "./components/homeComponents/Title";
import ExperienceAreas from "./components/pagesComponents/knowledgesComponent";
import { useEffect, useState } from "react";
import { dataStatus, knowledge } from "./components/dataTypes";
import axios from "axios";
//Lembrar de fazer:
//Experiencias profissionais
//Projetos pessoais
//Sobre mim
//Timeline
export default function Home() {
  const [experienceData, setExperienceData] = useState<knowledge[]>([]);
  const [dataStatus, setDataStatus] = useState<dataStatus>("loading");

  useEffect(() => {
    axios
      .get("/api/knowledges", {
        params: {
          type: "Linguagem",
        },
      })
      .then((res) => {
        setExperienceData(res.data);
        setDataStatus("success");
      })
      .catch(() => {
        setDataStatus("error");
      });
  }, []);

  return (
    <>
      <Title />
      <Divider sx={{ my: 5 }} />
      <Typography variant="h4">Experiência em:</Typography>
      <ExperienceAreas knowledges={experienceData} status={dataStatus} />
      <Divider sx={{ my: 5 }} />
      <AboutMe />
    </>
  );
}
