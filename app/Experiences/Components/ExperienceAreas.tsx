//linguagens - Javascript, css, html, python , c, c++, c#, java, php, vba, typescript

import { Box, Grid, Rating, Typography, useTheme } from "@mui/material";
import Image from "next/image";

//Frameworks - React, appScript, Next, dotnet, godot, gameMaker, Excel, Vs code, laravel
//Procurar - Excel, gamemaker, appscript

type experienceType = {
  name: string;
  icon: string;
  affinity: number;
  description?: string;
};

const languages: Array<experienceType> = [
  {
    name: "Javascript",
    icon: "Languages/javascript/javascript-original.svg",
    affinity: 4.8,
  },
  {
    name: "Css",
    icon: "Languages/css3/css3-original.svg",
    affinity: 3,
  },
  {
    name: "Html",
    icon: "Languages/html5/html5-original.svg",
    affinity: 4.9,
  },
  {
    name: "Python",
    icon: "Languages/python/python-original.svg",
    affinity: 4,
  },
];

function ExperienceAreas() {
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      {languages.map((item) => (
        <Grid item lg={3} md={6} xs={12} sx={{ my: 3, display: "flex" }}>
          <Image src={item.icon} width={80} height={80} alt={item.name} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h4">{item.name}</Typography>
            <Rating
              sx={{ color: theme.palette.text.primary }}
              value={item.affinity}
              readOnly
              precision={0.1}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ExperienceAreas;
