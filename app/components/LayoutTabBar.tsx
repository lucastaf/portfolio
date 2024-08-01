"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function LayoutTabBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

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
          {isSmScreen ? (
            <>
              <IconButton onClick={handleClick}>
                <Icon icon="material-symbols:menu" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => {
                  setAnchorEl(null);
                }}
              >
                {LinkItens.map((item, idx) => (
                  <MenuItem key={idx}>
                    <Link href={item.link} color="inherit">
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ gap: 2, display: "flex" }}>
              {LinkItens.map((item, idx) => (
                <Link key={idx} href={item.link} color="inherit">
                  {item.name}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LinkItens: { name: string; link: string }[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Experiências",
    link: "/experiencias",
  },
  {
    name: "Projetos",
    link: "/projetos",
  },
  {
    name: "Timeline",
    link: "/timeline",
  },
  {
    name: "Contato",
    link: "/contato",
  },
];

export default LayoutTabBar;
