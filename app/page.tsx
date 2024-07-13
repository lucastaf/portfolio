"use client";
import { Divider } from "@mui/material";
import SobreMim from "./components/homeComponents/SobreMim";
import Title from "./components/homeComponents/Title";
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
      <SobreMim />
    </>
  );
}
