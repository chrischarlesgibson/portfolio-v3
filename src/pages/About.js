import * as React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 200, height: 200 }}
      />
      <Divider />
      <Typography variant="body1">
        This is a short paragraph of text that appears after the divider.
      </Typography>
    </div>
  );
}
