"use client"
import { dataStatus, experience } from "@/app/components/dataTypes";
import getImagePath from "@/app/components/hooks/useImagePath";
import {
  Box,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ErrorComponent from "../ErrorComponents";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

function Experiences(props: { experiences: experience[]; status: dataStatus }) {
  const { experiences, status } = props;
  const [dialogData, setDialogData] = useState<experience>();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Grid container>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <DialogContent>
          <Box
            sx={{ display: "flex", flexWrap: isSmScreen ? "wrap" : "nowrap" }}
          >
            <Image
              src={getImagePath(dialogData?.icon)}
              width={isSmScreen ? 80 : 150}
              height={isSmScreen ? 80 : 150}
              alt={dialogData?.name ?? ""}
            />
            <Box sx={{ ml: isSmScreen ? 0 : 2 }}>
              <Typography variant="h4">{dialogData?.name}</Typography>
              <Typography variant={isSmScreen ? "subtitle1" : "h6"}>
                {dialogData?.location} , {dialogData?.time}
              </Typography>
              <Typography sx={{ mb: 1 }} variant="subtitle1">
                {dialogData?.role}
              </Typography>
              {dialogData?.knowledges.map((item, index) => (
                <Link key={index} href={`experiencias/${encodeURIComponent(item)}`}>
                  <Chip label={item} sx={{ mr: 1, mb: 1 }} />
                </Link>
              ))}
              <Typography variant="body1">{dialogData?.description}</Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {status == "success" ? (
        experiences?.map((item, index) => (
          <Grid key={index} item xs={12} lg={6}>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              style={{ marginBottom: 3, display: "flex", cursor: "pointer" }}
              onClick={() => {
                setDialogData(item);
                setDialogOpen(true)
              }}
            >
              <Image
                src={getImagePath(item.icon)}
                width={isSmScreen ? 60 : 100}
                height={isSmScreen ? 60 : 100}
                alt={item.name}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5" fontSize={isSmScreen ? 18 : 25}>
                  {item.name}
                </Typography>
                <Typography variant={isSmScreen ? "subtitle1" : "h6"}>
                  {item.location}, {item.time}
                </Typography>
                <Typography variant="body1">{item.role}</Typography>
              </Box>
            </motion.div>
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
