import { dataStatus, experience } from "@/app/components/dataTypes";
import useImagePath from "@/app/components/hooks/useImagePath";
import {
  Box,
  CircularProgress,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ErrorComponent from "../ErrorComponents";

function Experiences(props: { experiences: experience[] | undefined; status: dataStatus }) {
  const { experiences, status } = props;
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Grid container>
      {status == "success" ? (
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
      ) : status == "loading" ? (
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
      ) : (
        <ErrorComponent />
      )}
    </Grid>
  );
}

export default Experiences;
