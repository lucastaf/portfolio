"use client";
import { dataStatus, project } from "@/app/components/dataTypes";
import {
  Box,
  Button,
  CircularProgress,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ErrorComponent from "../ErrorComponents";

function Projects(props: { projects: project[]; status: dataStatus }) {
  const { projects, status } = props;
  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box>
      {status == "success" ? (
        projects.map((item, index) => (
          <Box key={index} sx={{ mb: isSmScreen ? 5 : 3, display: "flex" }}>
            {!isMdScreen && (
              <Link href={item.link} target="_blank">
                <Image
                  style={{
                    objectFit: "scale-down",
                    border: "1px solid white",
                    background: "rgba(128, 128, 128, 0.3)",
                    marginRight: 10,
                  }}
                  src={item.icon}
                  width={300}
                  height={200}
                  alt={item.name}
                />
              </Link>
            )}
            <Box sx={{maxWidth:'100%'}}>
              <Box>
                <Typography variant={isSmScreen ? "h5" : "h4"}>
                  {item.name}
                </Typography>
                <Typography variant={isSmScreen ? "subtitle1" : "h6"}>
                  Criado em: {item.time}
                </Typography>
                <Typography variant="subtitle1">
                  Status: {item.status}
                </Typography>
                {isMdScreen && (
                  <Link
                    href={item.link}
                    target="_blank"
                    style={{ marginTop: 10 }}
                  >
                    <Button size="small" sx={{ p: 0 }} variant="text">
                      Link do projeto
                    </Button>
                  </Link>
                )}
                <Typography variant="subtitle1">
                  Descrição: {item.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2, gap:1 }}>
                {!isSmScreen && (
                  <Typography variant="subtitle1">
                    Conhecimentos utilizados:{" "}
                  </Typography>
                )}
                {item.knowledges.map((knowledge, index) => {
                  knowledge = knowledge.trim();
                  return (
                    <Link
                      key={index}
                      href={`/experiencias/${encodeURIComponent(knowledge)}`}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                      >
                        {knowledge}
                      </Button>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Box>
        ))
      ) : status == "loading" ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ErrorComponent />
      )}
    </Box>
  );
}

export default Projects;
