"use client";

import { dataStatus, experience, project } from "@/app/components/dataTypes";
import { useEffect, useState } from "react";
import Projects from "@/app/components/pagesComponents/Projects";
import axios from "axios";
import Experiences from "@/app/components/pagesComponents/Experiences";
import { Box, Divider } from "@mui/material";

function DynamicKnowledge({ params }: { params: { knowledge: string } }) {
  const [projectData, setProjectData] = useState<project[]>([]);
  const [experienceData, setExperienceData] = useState<experience[]>([]);
  const [experienceStatus, setExperienceStatus] =
    useState<dataStatus>("loading");
  const [projectStatus, setProjectStatus] = useState<dataStatus>("loading");
  useEffect(() => {
    axios
      .get("/api/projects", {
        params: {
          knowledges: decodeURIComponent(params.knowledge),
        },
      })
      .then((res) => {
        setProjectData(res.data);
        setProjectStatus("success")
      }).catch(()=>{
        setProjectStatus("error")
      });
    axios
      .get("/api/experiences", {
        params: {
          knowledges: decodeURIComponent(params.knowledge),
        },
      })
      .then((res) => {
        setExperienceData(res.data);
        setExperienceStatus("success");
      })
      .catch(() => {
        setExperienceStatus("error");
      });
  }, [params.knowledge]);

  return (
    <Box>
      <Experiences experiences={experienceData} status={experienceStatus} />
      <Divider sx={{ my: 5 }} />
      <Projects projects={projectData} status={projectStatus} />
    </Box>
  );
}

export default DynamicKnowledge;
