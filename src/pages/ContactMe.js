import React, { useRef } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Button } from '@mui/material'
import emailjs from "@emailjs/browser";
// import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
// import "../styles/contactMe.css";
// import { init } from "@emailjs/browser";
import { useForm } from "react-hook-form";
// // init("REACT_APP_EMAILJS_USER_ID");
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function ContactMe() {
//     const classes = useStyles();
//     const form = useRef();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="name" label="Name" variant="outlined" />
//       <TextField id="email" label="Email" variant="outlined" />
//       <TextField id="subject" label="Subject" variant="outlined" />
//       <TextField
//         id="message"
//         label="Message"
//         variant="outlined"
//         multiline
//         rows={4}
//       />
//       <Button variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// }

export default function ContactMe() {
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
    name: {
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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(handleEmail, handleError)}
      id="contact-form-container"
    >
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                name="name"
                className="input "
                type="text"
                placeholder="Your Name"
                {...register("name", validations.name)}
              />
              <span className="help is-danger">
                {errors?.name && errors.name.message}
              </span>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                name="email"
                className="input "
                type="email"
                placeholder="Email"
                {...register("email", validations.email)}
              />
              <span className="help is-danger">
                {errors?.email && errors.email.message}
              </span>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Message</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                name="message"
                className="textarea"
                placeholder="Enter message..."
                {...register("message", validations.message)}
              ></textarea>
              <span className="help is-danger">
                {errors?.message && errors.message.message}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <br />
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                onClick={sendEmail}
                id="message-button"
                className="button "
                type="submit"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Footer /> */}
    </form>
  );
}
