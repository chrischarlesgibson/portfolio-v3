import resumePDF from "../images/Resume_10-21-2021.pdf";
import resumeImage from "../images/Resume2.png";
import * as React from "react";
import { motion } from "framer-motion";
import { Grid, Divider, Card, List, ListItem } from "@mui/material";
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
    <>
      <Grid>
        <h2 className="skillsHeader">Skills</h2>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List className="skillsList">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
              <ListItem className="skill" key={skill}>
                •{skill}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
              <ListItem className="skill" key={skill}>
                •{skill}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default function Resume() {
  return (
    <Grid className="resumeContainer" container>
      <Grid className="leftResumeGrid" item xs>
        <Card className="resumeCard">
          <h2 className="resumeHeader">click resume to download</h2>
          <a
            className="resumeLink"
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              className="resumeImage"
              src={resumeImage}
              alt="resume"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.01 }}
            ></motion.img>
          </a>
        </Card>
      </Grid>
      <Divider
        sx={{ borderRightWidth: 3, marginTop: "3%", marginBottom: "3%" }}
        orientation="vertical"
        flexItem
      ></Divider>
      <Grid item xs>
        <SkillsList />
      </Grid>
    </Grid>
  );
}
