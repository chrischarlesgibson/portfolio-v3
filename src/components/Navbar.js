import React from "react";
import NavBurger from "../components/NavBurger";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className="navBar" position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className="logo">
          Chris Gibson
        </Typography>

        {isMobile ? (
          <NavBurger />
        ) : (
          <div className="navlinks">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/About" className="link">
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/Projects" className="link">
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/Resume" className="link">
                Resume
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </motion.div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
