"use client";
import { knowledge } from "@/app/components/dataTypes";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";

function KnowledgeHeader({ knowledgeData }: { knowledgeData: knowledge }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={knowledgeData.icon}
            width={100}
            height={100}
            alt={knowledgeData.name}
          />
        </Box>
        <Box>
          <Typography textAlign={"center"} variant="h3">
            {knowledgeData.name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Rating
              sx={{ color: (theme) => theme.palette.text.primary }}
              value={knowledgeData.affinity}
              readOnly
              precision={0.1}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default KnowledgeHeader;
