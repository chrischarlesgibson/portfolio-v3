import * as React from "react";
import { Avatar, Divider, Typography } from "@mui/material";

export default function ImgMediaCard() {
  return (
    <div className="aboutMe-container">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <Divider />
      <Typography variant="body1">
        This is a short paragraph of text that appears after the divider.
      </Typography>
    </div>
  );
}
