"use client";
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
import { projectTypes } from "../dataTypes";
import Link from "next/link";

function AboutMe(props: { Areas: projectTypes[] }) {
  const { Areas } = props;
  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const textVaraitn: Variant = isMdScreen ? "subtitle1" : "h6";
  return (
    <motion.div
      initial={{
        x: -50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
    >
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
          pessoais.
        </Typography>
        <Typography
          variant={textVaraitn}
          textAlign="justify"
          sx={{ textJustify: "inter-character", my: 2 }}
        >
          <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Me destaco na
          adaptação com linguagens que não tive experiências previas. Em minhas
          últimas experiências, tive uma grande facilidade de aprender uma
          linguagem ou um framework quando me foi necessário, conseguindo
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
        <Typography
          variant={textVaraitn}
          textAlign="justify"
          sx={{ textJustify: "inter-character" }}
        >
          <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Tenho uma grande
          versatilidade com modelos de trabalhos, posso trabalhar como PJ ou
          CLT, horário fixo ou por demanda. Ja trabalhei com modelos de
          metodologia ágil.
        </Typography>
        <Typography variant="h4" sx={{ mt: 13, mb: 5 }}>
          Áreas que tenho mais proficiência :
        </Typography>
        <Box sx={{ display: "grid", gap: 3 }}>
          <Typography
            variant={textVaraitn}
            textAlign="justify"
            sx={{ textJustify: "inter-character" }}
          >
            <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Web Fullstack:
            Atualmente, é a área que tenho mais dominio, onde ja atuei
            profissionalmente como Dev Frontend React. Ja desenvolvi também
            diversas aplicações com front e backend para projetos pessoais e
            trabalhos de faculdade.
          </Typography>
          <Typography
            variant={textVaraitn}
            textAlign="justify"
            sx={{ textJustify: "inter-character" }}
          >
            <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Automações e
            planilhas: Ja fiz automações como atividade secundária em outros
            empregos, onde desenvolvi automações que facilitavam o trabalho de
            diversos setores. Desenvolvo automações de sistema feitas
            diretamente em python e ou automações de planihas (Excel em VBA,
            Google Sheets em AppScript)
          </Typography>
          <Typography
            variant={textVaraitn}
            textAlign="justify"
            sx={{ textJustify: "inter-character" }}
          >
            <Icon icon="ic:twotone-play-arrow" fontSize={30} /> Aplicações
            orientada a objetos: Sou grande entusiasta em linguagens como C# e Java, ja
            usei em vários de meus projetos, principalmente na parte de Game
            Making (Unity e Godot em C#). Além disso, ja usei POO para criação
            de diversos algoritmos.
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 3, ml: isMdScreen ? 0 : 3 }}>
          Listo meus projetos pessoais separados por essas áreas abaixo:
        </Typography>
        <List>
          {Areas.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Icon icon="tabler:point-filled" />
              </ListItemAvatar>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href={`projetos/${item.name}`}>
                  <Typography variant="h6">{item.title}</Typography>
                </Link>
              </motion.div>
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );
}

export default AboutMe;
