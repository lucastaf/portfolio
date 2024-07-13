import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, List, ListItem, ListItemAvatar, Typography } from "@mui/material";

function SobreMim() {
  const Areas = [
    "Web Frontend",
    "Spreadsheets e scripts",
    "Game making",
    "Algoritmos em geral",
  ];

  return (
    <Box sx={{maxWidth:'50%'}}>
      <Typography variant="h3">Sobre mim:</Typography>
      <Typography variant="h6">
        Sou programador e estudante de Ciencias da computação, possuo
        experiências profissionais e pessoais na área. Atualmente trabalho como
        desenvolvedor FrontEnd em React, onde desenvolvi uma grande afinidade
        com a linguage JavaScript.
      </Typography>
      <Typography variant="h6">
        Atualmente as áreas nas quais ja trabalhei ou estudei sobre foram:
      </Typography>
      <List>
        {Areas.map((item) => (
          <ListItem>
            <ListItemAvatar>
              <Icon icon="tabler:point-filled" />
            </ListItemAvatar>
            <Typography variant="h6">{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SobreMim;
