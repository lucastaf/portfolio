"use client";
import { dataStatus, project } from "@/app/components/dataTypes";
import Projects from "@/app/components/pagesComponents/Projects";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function ProjectsByType({ params }: { params: { type: string } }) {
  const { type } = params;
  const [data, setData] = useState<project[]>([]);
  const [dataStatus, setDataStatus] = useState<dataStatus>("loading");
  useEffect(() => {
    axios
      .get("/api/projects", {
        params: {
          type: type,
        },
      })
      .then((res) => {
        setData(res.data);
        setDataStatus("success");
        console.log(res.data);
      })
      .catch(() => {
        setDataStatus("error");
      });
  }, []);

  return (
    <Box>
      {dataStatus == "success" && !data.length && (
        <Typography textAlign="center" variant="h4">Ainda não possuo nenhum projeto do tipo {type} para apresentar 😣</Typography>
      )}
      <Projects projects={data} status={dataStatus} />
    </Box>
  );
}

export default ProjectsByType;
