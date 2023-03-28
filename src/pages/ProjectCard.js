import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/projectCard.css";
import { Divider } from "@mui/material";

export default function ProjectCard(props) {
  console.log(props.project);
  return (
    <Card className="projectCard" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.project.title}
        image={props.project.thumbnail}
        className="projectImage"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="projectTitle"
        >
          {props.project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="projectDescription"
        >
          {props.project.description}
        </Typography>
        <Divider />
        <Typography
          variant="body2"
          color="text.secondary"
          className="technologies"
        >
          Technologies: {props.project.tech.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="repoButton"
          size="small"
          href={props.project.repo}
          target="_blank"
          rel="noreferrer"
        >
          repo
        </Button>
        <Button
          className="siteButton"
          size="small"
          href={props.project.appUrl}
          target="_blank"
          rel="noreferrer"
        >
          site/demo
        </Button>
      </CardActions>
    </Card>
  );
}
