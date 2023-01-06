import { Container, Grid, Link } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
export default function ProjectContainer() {
  console.log(projects);
  return (
    <section>
      <h1>Projects</h1>
      <Container className="cardContainer">
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href={project.appUrl}>
                  <ProjectCard project={project} key={project.id} />
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
