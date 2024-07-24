import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <footer
      style={{
        height: "100px",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "center" }}>
        <Icon style={{ marginRight: 2 }} icon="ic:baseline-email" />
        lucas.bittencourtrauch@gmail.com
      </Box>
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "center" }}>
        <Icon style={{ marginRight: 2 }} icon="ic:baseline-phone" />
        (48) 99609-5391
      </Box>
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "center" }}>
        <Icon style={{ marginRight: 2 }} icon="entypo:address" />
        Tijucas - SC
      </Box>
    </footer>
  );
}

export default Footer;
