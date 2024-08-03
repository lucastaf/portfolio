"use client"
import { dataStatus, timeline } from "@/app/components/dataTypes";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ErrorComponent from "../ErrorComponents";
import { motion } from "framer-motion";

function TimeLineComponent(props: { data: timeline[]; status: dataStatus }) {
  const { data, status } = props;
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<timeline>();
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        disableScrollLock
      >
        <DialogTitle>
          <Typography variant="h5">{dialogData?.name}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>{dialogData?.description}</Typography>
          {dialogData?.link && (
            <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
              <Link href={dialogData?.link} target="_blank">
                <Button variant="outlined">Abrir Link</Button>
              </Link>
            </Box>
          )}
        </DialogContent>
      </Dialog>
      {status == "success" ? (
        <Timeline position="alternate" sx={{padding:0}}>
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setDialogData(item);
                  setDialogOpen(true);
                }}
              >
                <motion.div
                  style={{
                    transformOrigin: index % 2 ? "center right" : "center left",
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Typography
                    variant={isSmScreen ? "subtitle1" : "h6"}
                    fontSize={isSmScreen ? "14px" : "20px"}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant={isSmScreen ? "subtitle2" : "body1"}
                    fontSize={isSmScreen ? "12px" : "16px"}
                  >
                    {item.time}
                  </Typography>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
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
    </>
  );
}

export default TimeLineComponent;
