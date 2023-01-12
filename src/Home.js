import * as React from "react";
import { Grid, Typography } from "@mui/material";
import "./home.css";

export default function Home() {
  return (
    <Grid className="homeContainer">
      <Typography className="homeName" variant="h1">
        Chris Gibson
      </Typography>
      <Typography className="homeJobHeader" variant="h1">
        Full-Stack Developer
      </Typography>
    </Grid>
  );
}
