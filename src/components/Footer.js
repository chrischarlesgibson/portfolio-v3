import React from "react";
import "../styles/footer.css";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
import { Container, Grid, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="footer">
      <Box>
        <Container maxWidth="lg">
          <Grid container spaceing={5}>
            <Grid item xs={12} sm={4}>
              <Box className="content" borderBottom={1}>
                <Box>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="https://github.com/chrischarlesgibson?tab=repositories">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </motion.div>
                </Box>
                <Box>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="https://www.linkedin.com/in/chris-gibson-415909250/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </motion.div>
                </Box>
                <Box>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="https://medium.com/@chrischarlesgibson">
                      <FontAwesomeIcon icon={faMedium} />
                    </Link>
                  </motion.div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
