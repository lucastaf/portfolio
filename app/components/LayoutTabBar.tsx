import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function LayoutTabBar() {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu Portfolio
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sobre Mim</Button>
          <Button color="inherit">Meus Projetos</Button>
          <Button color="inherit">Contato</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default LayoutTabBar;
