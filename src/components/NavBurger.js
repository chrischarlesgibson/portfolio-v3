import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../styles/navburger.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

function NavBurger() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <>
      <Drawer open={openBurger} onClose={() => setOpenBurger(false)}>
        <List>
          <ListItem onClick={() => setOpenBurger(false)}>
            <ListItemText>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/about" className="burgerLink">
                  About
                </Link>
              </motion.div>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenBurger(false)}>
            <ListItemText>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/projects" className="burgerLink">
                  Projects
                </Link>
              </motion.div>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenBurger(false)}>
            <ListItemText>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/resume" className="burgerLink">
                  Resume
                </Link>
              </motion.div>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenBurger(false)}>
            <ListItemText>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/contact" className="burgerLink">
                  Contact
                </Link>
              </motion.div>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenBurger(!openBurger)} className="icon">
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default NavBurger;
