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
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ErrorComponent from "../ErrorComponents";

function TimeLineComponent(props: { data: timeline[]; status: dataStatus }) {
  const { data, status } = props;
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<timeline>();
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
              <Link href={dialogData?.link}>
                <Button variant="outlined">Abrir Link</Button>
              </Link>
            </Box>
          )}
        </DialogContent>
      </Dialog>
      {status == "success" ? (
        <Timeline position="alternate">
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <Link href={item.link} target="_blank">
                  <TimelineDot />
                </Link>
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
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.time}</Typography>
                </Box>
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
