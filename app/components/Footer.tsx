import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";

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
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "end" }}>
        <Link href={"mailto:lucas.bittencourtrauch@gmail.com"} target="_blank">
          <Icon style={{ marginRight: 2 }} icon="ic:baseline-email" />
        </Link>
        <Typography>lucas.bittencourtrauch@gmail.com</Typography>
      </Box>
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "end" }}>
        <Link href={"https://wa.me/5548996095391"} target="_blank">
          <Icon style={{ marginRight: 2 }} icon="ic:baseline-phone" />
        </Link>
        <Typography>(48) 99609-5391</Typography>
      </Box>
      <Box sx={{ mx: 1.5, display: "flex", alignItems: "end" }}>
        <Icon style={{ marginRight: 2 }} icon="entypo:address" />
        Tijucas - SC
      </Box>
    </footer>
  );
}

export default Footer;
