import { dataStatus, project } from "@/app/components/dataTypes";
import getImagePath from "@/app/components/hooks/useImagePath";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ErrorComponent from "../ErrorComponents";

function Projects(props: { projects: project[]; status: dataStatus }) {
  const { projects, status } = props;
  return (
    <Box>
      {status == "success" ? (
        projects.map((item, index) => (
          <Box key={index} sx={{ mb: 3, display: "flex" }}>
            <Link href={item.link} target="_blank">
              <Image
                style={{
                  objectFit: "scale-down",
                  border: "1px solid white",
                  background: "rgba(128, 128, 128, 0.3)",
                  marginRight: 10,
                }}
                src={getImagePath(item.icon)}
                width={300}
                height={200}
                alt={item.name}
              />
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h6">Criado em: {item.time}</Typography>
                <Typography variant="subtitle1">
                  Status: {item.status}
                </Typography>
                <Typography variant="subtitle1">
                  Descrição: {item.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Typography variant="subtitle1">
                  Conhecimentos utilizados:{" "}
                </Typography>
                {item.knowledges.map((knowledge, index) => {
                  knowledge = knowledge.trim();
                  return (
                    <Link
                      key={index}
                      href={`/experiencias/${encodeURIComponent(knowledge)}`}
                    >
                      <Button sx={{ ml: 1 }} size="small" variant="outlined">
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
