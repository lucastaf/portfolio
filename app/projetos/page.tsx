"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { project } from "../components/dataTypes";
import Projects from "./components/Projects";

function Projetos() {
  const [data, setData] = useState<project[]>([]);

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Box>
      <Projects projects={data} />
    </Box>
  );
}

export default Projetos;
