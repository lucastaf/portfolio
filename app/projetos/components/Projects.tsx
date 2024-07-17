import { project } from "@/app/components/dataTypes";
import useImagePath from "@/app/components/hooks/useImagePath";
import { Box } from "@mui/material";
import Image from "next/image";

function Projects(props: { projects: project[] }) {
  const { projects } = props;
  return (
    <Box>
      {projects.map((item) => (
        <Box>
          <Image src={useImagePath(item.icon)} width={10} height={10} alt={item.name} />
        </Box>
      ))}
    </Box>
  );
}

export default Projects;
