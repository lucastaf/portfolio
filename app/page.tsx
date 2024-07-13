"use client";
import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
//Lembrar de fazer:
//Experiencias profissionais
//Projetos pessoais
//Sobre mim
//Timeline
export default function Home() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid container spacing={5}>
        <Grid item lg={6} xs={12}>
          <Box sx={{ height: "100%" }}>
            <Box title="Bem vindo ao meu portfolio" />
            <Typography variant="h2">Ola, sou Lucas </Typography>
            <Typography
              variant="h5"
              textAlign="justify"
              sx={{ textJustify: "inter-character" }}
            >
              Este portfolio tem como objetivo mostrar minhas experiencias
              pessoais e profissionais como progrmador, listando e demonstrando
              meus conhecimentos em diversas áreas e com diferentes linguagens
            </Typography>
            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "right", gap: 3 }}
            >
              <Tooltip title="Linkedin">
                <IconButton>
                  <Icon fontSize={50} icon="mdi:linkedin" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Github">
                <IconButton>
                  <Icon fontSize={50} icon="mdi:github" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
        {!isSmScreen && (
          <Grid item lg={6} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ width: "50%", height: "50%", objectFit: "cover" }} // optional
                alt="Programador"
                src="/DeveloperSvg.svg"
                width={0}
                height={0}
                sizes="100vw"
              />
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid></Grid>
    </>
  );
}
