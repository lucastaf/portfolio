"use client";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import DeveloperSvg from "DeveloperSvg.svg";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Bem vindo ao meu portfolio" />
          <CardContent>
            Ola, me chamo Lucas Bittencourt e você está no meu portifolio de
            programador
          </CardContent>
          <CardContent>
            Este portfolio tem como objetivo mostrar minhas experiencias
            pessoais e profissionais como progrmador, listando e demonstrando
            meus conhecimentos em diversas áreas e com diversas linguagens
            diferentes
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
