import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
  } from "@mui/lab";
  import { Card, CardContent, Typography } from "@mui/material";
  import React from "react";
  
  const TimelineCard = (props) => {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ marginBottom: 10 }}>
          <Card
            sx={{
              width: "fit-content",
              paddingLeft: props.pLeft,
              paddingRight: props.pRight,
              float: props.position,
            }}
          >
            <CardContent>
              <Typography sx={{ my: 1 }} variant="h6">
                {props.title}
              </Typography>
              <Typography sx={{ my: 1 }} variant="subtitle2">
                {props.date}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body">
                {props.body1}
              </Typography>
              <br></br>
              <Typography sx={{ my: 1 }} variant="body">
                {props.body2}
              </Typography>
              <br></br>
              <Typography sx={{ my: 1 }} variant="body">
                {props.body3}
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  };
  
  export default TimelineCard;
  