import React from "react";
import "../styles/footer.css";
import { Link } from "@mui/material";
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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="https://github.com/chrischarlesgibson?tab=repositories">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="https://www.linkedin.com/in/chris-gibson-415909250/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="https://medium.com/@chrischarlesgibson">
          <FontAwesomeIcon icon={faMedium} />
        </Link>
      </motion.div>
    </footer>
  );
}
