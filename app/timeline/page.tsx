"use client";

import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { dataStatus, timeline } from "../components/dataTypes";
import TimeLineComponent from "../components/pagesComponents/Timeline";

function TimeLine() {
  const [data, setData] = useState<timeline[]>([]);
  const [dataStatus, setDataStatus] = useState<dataStatus>("loading");

  useEffect(() => {
    axios
      .get("/api/timeline")
      .then((res) => {
        setData(res.data);
        setDataStatus("success");
      })
      .catch(() => {
        setDataStatus("error");
      });
  }, []);

  return (
    <Box>
      <TimeLineComponent data={data} status={dataStatus} />
    </Box>
  );
}

export default TimeLine;
