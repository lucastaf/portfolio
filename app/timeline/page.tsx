import { Box } from "@mui/material";
import { dataStatus, timeline } from "../components/dataTypes";
import TimeLineComponent from "../components/pagesComponents/Timeline";
import getSheetTab from "../api/components/getSheetTab";

async function TimeLine() {
  const [data, dataStatus] = await getTimeLinePageData();

  return (
    <Box>
      <TimeLineComponent data={data} status={dataStatus} />
    </Box>
  );
}

async function getTimeLinePageData(): Promise<[timeline[], dataStatus]> {
  try {
    const timeLineData = await getSheetTab("timeline");
    return [timeLineData.data, "success"];
  } catch {
    return [[], "error"];
  }
}

export default TimeLine;
