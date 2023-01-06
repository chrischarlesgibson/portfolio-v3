import React from "react";
import { Modal, Typography, Box } from "@mui/material";
import "../styles/contactModal.css";
/* <Button onClick={handleOpen}>Open modal</Button> */
export default function ContactModal(props) {
  // const { result } = props;
  const { modalOpen, setModalOpen } = props;

  const handleClose = () => setModalOpen(false);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setModalOpen(false);
  // if (result.text === "OK") {
  //   setOpen(true);
  // }
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalBox">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Message Sent!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          I will get back to you as soon as possible.
        </Typography>
      </Box>
    </Modal>
  );
}
