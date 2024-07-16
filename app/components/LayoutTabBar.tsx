"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LayoutTabBar() {
  const router = useRouter();
  function redirectTo(route: string) {
    return () => {
      router.push(route);
    };
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link href={"/"} style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Meu Portfolio
            </Typography>
          </Link>
          <Box sx={{gap:2, display:'flex'}}>
            <Link href={"/"} color="inherit">
              Home
            </Link>
            <Link href={"/experiencias"} color="inherit">
              Experiências
            </Link>
            <Link href={"/"} color="inherit">
              Projetos
            </Link>
            <Link href={"/"} color="inherit">
              Contato
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LayoutTabBar;
