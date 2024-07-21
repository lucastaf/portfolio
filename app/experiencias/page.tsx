"use client";
import { Box,  Divider, Typography } from "@mui/material";
import KnowledgesComponent from "../components/pagesComponents/knowledgesComponent";
import Companys from "../components/pagesComponents/Experiences";
import { useEffect, useState } from "react";
import { experience, knowledge } from "../components/dataTypes";
import axios from "axios";

function Knowledges() {
  const [companyData, setCompanyData] = useState<experience[] | undefined>(
    undefined
  );
  const [educationData, setEducationData] = useState<experience[] | undefined>(
    undefined
  );
  const [languagesData, setLanguagesData] = useState<knowledge[] | undefined>(
    undefined
  );
  const [frameworksData, setFrameworksData] = useState<knowledge[] | undefined>(
    undefined
  );
  const [otherKnowledgesData, setOtherKnowledgesData] = useState<
    knowledge[] | undefined
  >(undefined);
  useEffect(() => {
    axios.get("/api/experiences").then((res) => {
      setCompanyData(
        res.data.filter((item: experience) => item.type == "emprego")
      );
      setEducationData(
        res.data.filter((item: experience) => item.type == "educacao")
      );
    });
    axios.get("/api/knowledges").then((res) => {
      setLanguagesData(
        res.data.filter((item: knowledge) => item.type == "Linguagem")
      );
      setFrameworksData(
        res.data.filter((item: knowledge) => item.type == "Framework")
      );
      setOtherKnowledgesData(
        res.data.filter(
          (item: knowledge) =>
            !(item.type?.match(/(.*Linguagem|.*Framework)/))
        )
      );
    });
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Experiências Profissionais:
      </Typography>
      <Companys experiences={companyData} />
      <Typography variant="h4" sx={{ mb: 2 }}>
        Formação:
      </Typography>
      <Companys experiences={educationData} />
      <Divider />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Meus Conhecimentos:
      </Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Linguagens:
      </Typography>
      <KnowledgesComponent knowledges={languagesData} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Frameworks:
      </Typography>
      <KnowledgesComponent knowledges={frameworksData} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Outros conhecimentos:
      </Typography>
      <KnowledgesComponent knowledges={otherKnowledgesData} />
    </Box>
  );
}

export default Knowledges;
