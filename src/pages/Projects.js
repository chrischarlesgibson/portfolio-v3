import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
export default function ProjectContainer() {
  console.log(projects);
  return (
    <section>
      <h1>Projects</h1>
      <Container className="cardContainer">
        <Grid>
          <Box>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        </Grid>
      </Container>
    </section>
  );
}
