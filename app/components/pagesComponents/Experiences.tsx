import { experience } from "@/app/components/dataTypes";
import useImagePath from "@/app/components/hooks/useImagePath";
import {
  Box,
  CircularProgress,
  Grid,
  GridProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

function Companys(props: GridProps & { experiences?: experience[] }) {
  const { experiences } = props;
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Grid container>
      {experiences ? (
        experiences?.map((item) => (
          <Grid item xs={12} lg={6} sx={{ mb: 3, display: "flex" }}>
            <Image
              src={useImagePath(item.icon)}
              width={isSmScreen ? 60 : 100}
              height={isSmScreen ? 60 : 100}
              alt={item.name}
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h5" fontSize={isSmScreen ? 18 : 25}>
                {item.name}
              </Typography>
              <Typography variant="h6">
                {item.location}, {item.time}
              </Typography>
              <Typography variant="body1">{item.role}</Typography>
            </Box>
          </Grid>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            my: 5,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Grid>
  );
}

export default Companys;
