//linguagens - Javascript, css, html, python , c, c++, c#, java, php, vba, typescript
"use client";
import { dataStatus, knowledge } from "@/app/components/dataTypes";
import getImagePath from "@/app/components/hooks/useImagePath";
import {
  Box,
  CircularProgress,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ErrorComponent from "../ErrorComponents";
import Link from "next/link";

//Frameworks - React, appScript, Next, dotnet, godot, gameMaker, Excel, Vs code, laravel
//Procurar - Excel, gamemaker, appscript

function KnowledgesComponent(props: {
  knowledges?: knowledge[];
  status: dataStatus;
}) {
  const { knowledges, status } = props;
  const theme = useTheme();
  return (
    <Grid container spacing={3}>
      {status == "success" ? (
        knowledges?.map((item, index) => (
          <Grid
            key={index}
            item
            lg={3}
            md={6}
            xs={12}
            sx={{ my: 3, display: "flex" }}
          >
            <Link href={`experiencias/${encodeURIComponent(item.name)}`}>
              <Image
                src={getImagePath(item.icon)}
                width={80}
                height={80}
                alt={item.name}
              />
            </Link>
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
      ) : status == "loading" ? (
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
      ) : (
        <ErrorComponent />
      )}
    </Grid>
  );
}

export default KnowledgesComponent;
