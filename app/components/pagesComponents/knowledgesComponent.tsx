//linguagens - Javascript, css, html, python , c, c++, c#, java, php, vba, typescript
"use client";
import { knowledge } from "@/app/components/dataTypes";
import useImagePath from "@/app/components/hooks/useImagePath";
import {
  Box,
  CircularProgress,
  Grid,
  GridProps,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

//Frameworks - React, appScript, Next, dotnet, godot, gameMaker, Excel, Vs code, laravel
//Procurar - Excel, gamemaker, appscript

function KnowledgesComponent(props: { knowledges?: knowledge[] }) {
  const { knowledges } = props;
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      {knowledges ? (
        knowledges?.map((item) => (
          <Grid item lg={3} md={6} xs={12} sx={{ my: 3, display: "flex" }}>
            <Image
              src={useImagePath(item.icon)}
              width={80}
              height={80}
              alt={item.name}
            />
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
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            my: 5,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Grid>
  );
}

export default KnowledgesComponent;
