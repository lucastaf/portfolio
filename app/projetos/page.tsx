"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { dataStatus, project } from "../components/dataTypes";
import Projects from "../components/pagesComponents/Projects";

function Projetos() {
  const [data, setData] = useState<project[]>([]);
  const [dataStatus, setDataStatus] = useState<dataStatus>("loading");

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setData(res.data);
      setDataStatus("success")
    }).catch(()=>{
      setDataStatus("error")
    });
  }, []);

  return (
    <Box>
      <Projects projects={data} status={dataStatus} />
    </Box>
  );
}

export default Projetos;
