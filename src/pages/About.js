import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "../components/TimelineCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Typography sx={{ textAlign: "center", marginTop: "2rem" }} variant="h4">
                About us
            </Typography>
            <Timeline
                sx={
                    isMobile
                        ? {
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }
                        : {}
                }
                position={isMobile ? "right" : "alternate"}
            >
                <TimelineCard
                    pLeft={1}
                    pRight={8}
                    title="Filmshop founded"
                    date="july, 2019"
                    body1="Filmshop was founded by student from FPT University HCMC"
                    body2="The first version of Filmshop was released"
                    body3="Filmshop was a website that provide information about movies"
                />
                <TimelineCard
                    position={isMobile ? "left" : "right"}
                    pRight={isMobile ? 8 : 1}
                    pLeft={isMobile ? 1 : 8}
                    title="Filmshop 2.0"
                    date="sept, 2021"
                    body1="Filmshop was rebuilt with ReactJS"
                    body2="Filmshop was rebuilt with Material UI"
                    body3="Smoothen the user experience with ReactJS and Material UI"
                />
                <TimelineCard
                    pLeft={1}
                    pRight={8}
                    title="Filmshop 2.1"
                    date="jan, 2023"
                    body1="Filmshop is devloping with more features"
                    body2="Add more features to the website"
                    body3="Add more movies to the database"
                />
            </Timeline>
        </Box>
    );
};

export default About;
