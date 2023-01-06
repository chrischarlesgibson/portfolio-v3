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
        height="140"
        image={props.project.thumbnail}
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
        <Button size="small">
          {" "}
          <a href={props.project.repo}>repo</a>
        </Button>
        <Button size="small">
          {" "}
          <a href={props.project.appUrl}>live site</a>
        </Button>
      </CardActions>
    </Card>
  );
}
