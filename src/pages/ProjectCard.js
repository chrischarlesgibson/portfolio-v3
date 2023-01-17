import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/projectCard.css";

export default function ProjectCard(props) {
  console.log(props.project);
  return (
    <Card className="projectCard" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.project.title}
        image={props.project.thumbnail}
        style={{ width: "100%", height: "40%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="projectButton"
          size="small"
          href={props.project.repo}
          target="_blank"
          rel="noreferrer"
        >
          repo
        </Button>
        <Button
          className="projectButton"
          size="small"
          href={props.project.appUrl}
          target="_blank"
          rel="noreferrer"
        >
          live site
        </Button>
      </CardActions>
    </Card>
  );
}
