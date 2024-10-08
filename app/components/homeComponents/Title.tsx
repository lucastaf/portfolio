"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function Title() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container spacing={5}>
      <Grid item lg={6} xs={12}>
        <Box sx={{ height: "100%" }}>
          <Box title="Bem vindo ao meu portfolio" />
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <Typography variant="h2">Olá, sou Lucas </Typography>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          >
            <Typography
              variant="h5"
              //textAlign="justify"
              //sx={{ textJustify: "inter-character" }}
            >
              Este portfolio tem como objetivo mostrar minhas experiencias
              pessoais e profissionais como programador, listando e demonstrando
              meus conhecimentos em diversas áreas e com diferentes linguagens
            </Typography>
          </motion.div>
          <Box sx={{ display: "flex", mt: 3, justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 100,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                }}
              >
                <Link href={"/curriculo.pdf"} target="_blank" download={true}>
                  <Button
                    sx={{ borderRadius: 20 }}
                    size="large"
                    variant="outlined"
                  >
                    <Icon icon="material-symbols:download" /> Curriculo
                  </Button>
                </Link>
              </motion.div>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right", gap: 3 }}>
              <Link
                href={
                  "https://www.linkedin.com/in/lucas-bittencourt-rauch-b40967243"
                }
                target="_blank"
              >
                <Tooltip title="Linkedin">
                  <IconButton>
                    <Icon fontSize={50} icon="mdi:linkedin" />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href={"https://github.com/lucastaf"} target="_blank">
                <Tooltip title="Github">
                  <IconButton>
                    <Icon fontSize={50} icon="mdi:github" />
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      {!isSmScreen && (
        <Grid item lg={6} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ width: "50%", height: "50%", objectFit: "cover" }} // optional
              alt="Programador"
              src="/images/DeveloperSvg.svg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default Title;
