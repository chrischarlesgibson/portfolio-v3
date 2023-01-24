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

      <Typography className="bio" variant="body1">
        {" "}
        Email: chrischarlesgibson@gmail.com
      </Typography>
      <Box>
        {" "}
        LinkedIn:
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://www.linkedin.com/in/chris-gibson-415909250/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </motion.div>
      </Box>
      <Box>
        {" "}
        Github:{" "}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="https://github.com/chrischarlesgibson?tab=repositories">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </motion.div>
      </Box>

      <Typography className="bio" variant="body1">
        I'm a full-stack developer that has a strong history in project
        management. I graduated from UW-Madison in 2018 with a degree in Biology
        and I worked as a project manager in the biotech industry for 4 years. I
        recently made a career switch into coding and I graduated from
        UC-Berkeley's full-stack coding bootcamp in December 2022.I have
        experience with Javascript, React.js, SQL, MongoDB, Node.js, Express.js,
        GraphQL, REST APIs, Jest, and more. I am looking for new and exciting
        challenges as a full-stack developer and hope to be a key member of your
        team!
      </Typography>
    </div>
  );
}
