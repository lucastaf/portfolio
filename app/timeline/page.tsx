"use client"

import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { timeline } from "../components/dataTypes";
import TimeLineComponent from "../components/pagesComponents/Timeline";

function TimeLine() {
  const [data, setData] = useState<timeline[]>([]);

  useEffect(() => {
    axios.get("/api/timeline").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Box>
      <TimeLineComponent data={data} />
    </Box>
  );
}

export default TimeLine;
