import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { motion } from "framer-motion";
import styles from "./AppearOnScroll.module.css"

function AboutMe() {
  const Areas = [
    "Web Frontend",
    "Spreadsheets e scripts",
    "Game making",
    "Algoritmos em geral",
  ];
  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const textVaraitn: Variant = isMdScreen ? "subtitle1" : "h6";
  return (
    <motion.div className={styles.block}>
      <Box sx={{ maxWidth: isMdScreen ? "100%" : "70%" }}>
        <Typography variant="h3">Sobre mim:</Typography>
        <Typography
          variant={textVaraitn}
          textAlign="justify"
          sx={{ textJustify: "inter-character" }}
        >
          <Icon icon="ic:twotone-play-arrow" fontSize={"1.3em"} /> Sou
          programador e estudante de Ciencias da computação, possuo ampla
          experiência no desenvolviemnto de projetos, tanto profissionais quanto
          pessoais. Atualmente trabalho como desenvolvedor FrontEnd em React,
          onde desenvolvi uma grande afinidade com a linguagem JavaScript.
        </Typography>
        <Typography
          variant={textVaraitn}
          textAlign="justify"
          sx={{ textJustify: "inter-character", my: 2 }}
        >
          <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Me destaco na
          adaptação com linguagens que não tive experiências previas. Em minhas
          últimas experiências, tive uma grande facilidade de aprender uma
          linguagem ou uma framework quando me foi necessário, conseguindo
          dominar uma ferramenta nova dentro de poucas semanas.
        </Typography>
        <Typography
          variant={textVaraitn}
          textAlign="justify"
          sx={{ textJustify: "inter-character" }}
        >
          <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Lógica de
          programação é um dos meus pontos fortes, desde o ensino fundamental
          possuo uma grande facilidade em matemática. Após terminar o ensino
          médio aprofundei meus estudos na área, consequentemente obtive maior
          facilidade em dominar os algoritmos de programação.
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, ml: isMdScreen ? 0 : 3 }}>
          Atualmente as áreas nas quais ja trabalhei ou estudei sobre foram:
        </Typography>
        <List>
          {Areas.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Icon icon="tabler:point-filled" />
              </ListItemAvatar>
              <Typography variant="h6">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );
}

export default AboutMe;
