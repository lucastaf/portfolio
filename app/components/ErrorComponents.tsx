import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography } from "@mui/material";

function ErrorComponent() {
  return (
    <Box sx={{display:'flex', justifyContent:'center', width:"100%", my:2}}>
      <Typography variant="h6">
        <Icon icon="material-symbols:error-outline" />
        Houve um erro ao buscar os dados
      </Typography>
    </Box>
  );
}

export default ErrorComponent;
