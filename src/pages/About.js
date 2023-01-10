import * as React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import "../styles/about.css";
import headshot from "../images/headshot.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <Avatar
        alt="Chris Gibson"
        src={headshot}
        sx={{ width: 200, height: 200 }}
      />

      <Divider />

      <Typography className="bio" variant="body1">
        I'm a full-stack developer that has a strong history in project
        management. I graduated from UW-Madison in 2018 with a degree in Biology
        and I have working as a project manager in the biotech industry for the
        last 4 years. I recently made a career switch into coding and I
        graduated from UC-Berkeley's full-stack coding bootcamp in December
        2022.I have experience with Javascript, React.js, SQL, MongoDB, Node.js,
        Express.js, GraphQL, REST APIs, Jest, and more. I'm currently looking
        for new oppourtunities and challenges so I created this porfolio page to
        display my talents and my work. I am looking for new and exciting
        challenges as a full-stack developer and hope to be a key member of your
        team!
      </Typography>
    </div>
  );
}
