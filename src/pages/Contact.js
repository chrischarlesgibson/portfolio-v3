import React, { useRef } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Button } from '@mui/material'
import emailjs from "@emailjs/browser";

// import Footer from "./Footer";
import "../styles/contact.css";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
// import "../styles/contactMe.css";
// import { init } from "@emailjs/browser";
import { useForm } from "react-hook-form";
// // init("REACT_APP_EMAILJS_USER_ID");

export default function Contact() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    mode: "onBlur",
  });

  const handleEmail = (data) => console.log(data);

  const handleError = (errors) => console.error(errors);

  const validations = {
    firstname: {
      required: "name required.",
      minLength: {
        value: 2,
        message: "name should be at-least 2 characters.",
      },
    },
    lastname: {
      required: "name required.",
      minLength: {
        value: 2,
        message: "name should be at-least 2 characters.",
      },
    },
    email: {
      required: "Email is required.",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is not valid.",
      },
    },
    message: {
      required: "message required.",
      minLength: {
        value: 5,
        message: "message must be at least 5 characters long.",
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // if (name && emailAddress && emailMessage) {

    emailjs
      .sendForm(
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        // form.current,
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        "service_2csukpf",
        "template_uqxju68",
        form.current,
        "YC8aaQfJCs6lk22CO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        React-App
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form
              ref={form}
              onSubmit={handleSubmit(handleEmail, handleError)}
              id="contact-form-container"
            >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="firstname"
                    className="input "
                    {...register("firstname", validations.firstname)}
                  />
                  <span className="errorMessage">
                    {errors?.firstname && errors.firstname.message}
                  </span>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="lastname"
                    className="input "
                    {...register("lastname", validations.lastname)}
                  />
                  <span className="errorMessage">
                    {errors?.lastname && errors.lastname.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    className="input "
                    {...register("email", validations.email)}
                  />
                  <span className="errorMessage">
                    {errors?.email && errors.email.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    {...register("message", validations.message)}
                    name="phonenumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    name="message"
                    className="textarea"
                    {...register("message", validations.message)}
                  />
                  <span className="errorMessage">
                    {errors?.message && errors.message.message}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={sendEmail}
                    id="message-button"
                    className="submitButton "
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
