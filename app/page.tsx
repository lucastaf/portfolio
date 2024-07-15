"use client";
import { Divider } from "@mui/material";
import AboutMe from "./components/homeComponents/AboutMe";
import Title from "./components/homeComponents/Title";
import ExperienceAreas from "./Experiences/Components/ExperienceAreas";
//Lembrar de fazer:
//Experiencias profissionais
//Projetos pessoais
//Sobre mim
//Timeline
export default function Home() {
  return (
    <>
      <Title />
      <Divider sx={{ my: 5 }} />
      <AboutMe />
      <Divider sx={{ my: 5 }} />
      <ExperienceAreas />
    </>
  );
}
