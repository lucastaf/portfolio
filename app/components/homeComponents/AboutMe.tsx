import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, List, ListItem, ListItemAvatar, Typography } from "@mui/material";

function AboutMe() {
  const Areas = [
    "Web Frontend",
    "Spreadsheets e scripts",
    "Game making",
    "Algoritmos em geral",
  ];

  return (
    <Box sx={{ maxWidth: "70%" }}>
      <Typography variant="h3">Sobre mim:</Typography>
      <Typography
        variant="h6"
        textAlign="justify"
        sx={{ textJustify: "inter-character" }}
      >
        <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Sou programador e
        estudante de Ciencias da computação, possuo ampla experiência no
        desenvolviemnto de projetos, tanto profissionais quanto pessoais.
        Atualmente trabalho como desenvolvedor FrontEnd em React, onde
        desenvolvi uma grande afinidade com a linguagem JavaScript.
      </Typography>
      <Typography
        variant="h6"
        textAlign="justify"
        sx={{ textJustify: "inter-character" }}
      >
        <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Me destaco na
        adaptação com linguagens que não tive experiências previas. Em minhas
        últimas experiências, tive uma grande facilidade de aprender uma
        linguagem ou uma framework quando me foi necessário, conseguindo dominar
        uma ferramenta nova dentro de poucas semanas.
      </Typography>
      <Typography
        variant="h6"
        textAlign="justify"
        sx={{ textJustify: "inter-character" }}
      >
        <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Lógica de
        programação é um dos meus pontos fortes, desde o ensino fundamental
        possuo uma grande facilidade em matemática. Após terminar o ensino médio
        aprofundei meus estudos na área, consequentemente obtive maior
        facilidade em dominar os algoritmos de programação.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
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

export default AboutMe;
