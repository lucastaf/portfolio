"use client";

import { project } from "@/app/components/dataTypes";
import { useEffect, useState } from "react";
import Projects from "@/app/components/pagesComponents/Projects";
import axios from "axios";

function DynamicKnowledge({ params }: { params: { knowledge: string } }) {
  const [projectData, setProjectData] = useState<project[]>([]);
  useEffect(() => {
    axios
      .get("/api/projects", {
        params: {
          knowledges: decodeURIComponent(params.knowledge),
        },
      })
      .then((res) => {
        setProjectData(res.data);
      });
  }, []);

  return <Projects projects={projectData} />;
}

export default DynamicKnowledge;
