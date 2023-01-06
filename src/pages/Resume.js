import resumePDF from "../images/Resume_10-21-2021.pdf";

import * as React from "react";
import {
  Grid,
  Divider,
  Button,
  CardActionArea,
  CardActions,
  Card,
  List,
  ListItem,
} from "@mui/material";
import "../styles/resume.css";
const skills = [
  "JavaScript",
  "jQuery",
  "React",
  "MySQL",
  "HTML5",
  "Node.js",
  "Express.js",
  "Jest",
  "Handlebars",
  "MongoDB",
  "GraphQL",
  "Sequelize",
  "CSS3",
  "Bootstrap",
  "Bulma",
  "Materialize",
  "Heroku",
  "Git",
  "Insomnia",
];
function SkillsList() {
  return (
    <List>
      {skills.map((skill) => (
        <ListItem key={skill}>•{skill}</ListItem>
      ))}
    </List>
  );
}

export default function Resume() {
  return (
    <Grid className="resumeContainer" container>
      <Grid className="leftResumeGrid" item xs>
        <Card className="resumeCard">
          <CardActionArea>
            <object
              className="resumePDF"
              data={resumePDF}
              type="application/pdf"
            >
              <p>
                Your browser does not support PDFs. Download the PDF to view it:{" "}
                <a href={resumePDF}>Download PDF</a>
              </p>
            </object>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href={resumePDF}
              size="small"
              color="primary"
            >
              Download
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Divider
        sx={{ borderRightWidth: 5, marginTop: "5%", marginBottom: "5%" }}
        orientation="vertical"
        flexItem
      ></Divider>
      <Grid item xs>
        <SkillsList />
      </Grid>
    </Grid>
  );
}
