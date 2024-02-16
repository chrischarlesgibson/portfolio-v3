import * as React from "react";
import { Avatar, Divider, Typography, Box, Link } from "@mui/material";
import "../styles/about.css";
import { motion } from "framer-motion";
import headshot from "../images/headshot.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className="about-container">
      <Avatar
        className="headshot"
        alt="Chris Gibson"
        src={headshot}
        sx={{ width: 200, height: 200 }}
      />

      <Divider />
      <div className="links-container">
        <Typography className="email" variant="body1">
          {" "}
          chrischarlesgibson@gmail.com
        </Typography>
        <Box>
          {" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://www.linkedin.com/in/chris-gibson-415909250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </motion.div>
        </Box>
        <Box>
          {" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://github.com/chrischarlesgibson?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
          </motion.div>
        </Box>
      </div>

      <Typography className="bio" variant="body1">
        I'm a software engineer currently working for GE Healthcare, where I'm
        focused on application development/improvement using C#, .Net and SQL
        server. I have experience with Javascript, Typescript, C#,Entity
        framework, .NET, React , SQL, MongoDB, Node.js, Express.js, GraphQL,
        REST APIs, Jest, and more. I'm looking for new and exciting challenges
        as a .NET developer and hope to be a key member of your team.
      </Typography>
    </div>
  );
}
