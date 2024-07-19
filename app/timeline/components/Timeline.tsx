import { timeline } from "@/app/components/dataTypes";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Accordion,
  AccordionSummary,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function TimeLineComponent(props: { data: timeline[] }) {
  const { data } = props;
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<timeline>();
  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <DialogTitle>
          <Typography variant="h5">{dialogData?.name}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>{dialogData?.description}</Typography>
        </DialogContent>
      </Dialog>
      <Timeline position="alternate">
        {data.map((item) => (
          <TimelineItem>
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
    </>
  );
}

export default TimeLineComponent;
