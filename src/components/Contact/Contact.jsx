import "./contact.css";
import { useState, useEffect, useRef } from "react";
import emailJS from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameRef = useRef(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const messageRef = useRef(null);

  const [messageSent, setMessageSent] = useState(false);

  const formRef = useRef();

  const nameChange = (val) => {
    resetNameErrors();
    setName(val);
  };

  const emailChange = (val) => {
    resetEmailErrors();
    setEmail(val);
  };

  const messageChange = (val) => {
    resetMessageErrors();
    setMessage(val);
  };

  const isFormValid = () => {
    let errors = false;

    resetNameErrors();
    resetEmailErrors();
    resetMessageErrors();

    // Validate Name
    if (!name) {
      setNameError("Please enter your name");
      nameRef.current.className = "text-input error-field";
      errors = true;
    }

    // Validate Email
    if (!email) {
      setEmailError("Please enter an email address");
      emailRef.current.className = "text-input error-field";
      errors = true;
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError("Email must be an email format");
      emailRef.current.className = "text-input error-field";
      errors = true;
    }

    // Validate Message
    if (!message) {
      setMessageError("Looks like you forgot to add a message");
      messageRef.current.className = "text-input error-field";
      errors = true;
    }

    if (errors) {
      return false;
    } else {
      return true;
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      emailJS
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessageSent(true);
            setName("");
            setEmail("");
            setMessage("");
            setMessageError("");
          },
          (error) => {
            setMessageError(error.text);
          }
        );
    }
  };

  const resetForm = () => {
    setMessageSent(false);

    resetNameErrors();
    resetEmailErrors();
    resetMessageErrors();

    setName("");
    setEmail("");
    setMessage("");

    nameRef.current.focus();
  };

  const resetNameErrors = () => {
    setNameError("");
    nameRef.current.className = "text-input";
  };

  const resetEmailErrors = () => {
    setEmailError("");
    emailRef.current.className = "text-input";
  };

  const resetMessageErrors = () => {
    setMessageError("");
    messageRef.current.className = "text-input";
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p className="sub-heading">
        Have a question or ready to discuss your next project? Contact me today!
      </p>
      <div className="contact-grid">
        {/* Panel 1 */}
        <form className="contact-form" ref={formRef} onSubmit={sendMessage}>
          {/* Name */}
          <div className="contact-field">
            <label>Your Name</label>
            {nameError ? <p className="error-label">{nameError}</p> : null}
            <input
              className="text-input"
              type="text"
              id="name"
              name="user_name"
              value={name}
              ref={nameRef}
              onChange={(e) => nameChange(e.target.value)}
              placeholder="Your name.."
            />
          </div>

          {/* Email */}
          <div className="contact-field">
            <label>Email</label>
            {emailError ? <p className="error-label">{emailError}</p> : null}
            <input
              className="text-input"
              type="email"
              id="email"
              name="user_email"
              value={email}
              ref={emailRef}
              onChange={(e) => emailChange(e.target.value)}
              placeholder="you@domain.com"
            />
          </div>

          {/* Message */}
          <div className="contact-field">
            <label>Message</label>
            {messageError ? (
              <p className="error-label">{messageError}</p>
            ) : null}
            <textarea
              className="text-input"
              id="message"
              name="message"
              value={message}
              ref={messageRef}
              onChange={(e) => messageChange(e.target.value)}
              placeholder="What would you like to say.."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="contact-buttons">
            <button className="btn btn-primary">Send</button>

            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => resetForm()}
            >
              Reset Form
            </button>
          </div>

          {messageSent ? (
            <div className="message-success">
              <p>
                <strong>Message Sent!</strong> If a response is required, I will
                endeavour to get back to you as soon as possible
              </p>
            </div>
          ) : null}
        </form>

        {/* Panel 2 */}
        <div className="contact-panel">
          <div className="contact-details">
            <div>
              <div>
                <i className="fa-solid fa-phone"></i> Phone
              </div>
              <a href="tel:+642109151347">+64 21 0915 1347</a>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-at"></i> Email
              </div>
              <a href="mailto:dan.tibbotts@gmail.com">dan.tibbotts@gmail.com</a>
            </div>
            <div>
              <div>
                <i className="fa-brands fa-linkedin"></i> Linked In
              </div>
              <a href="https://linkedin.com/in/dan-tibbotts" target="_blank">
                linkedin/in/<strong>dan-tibbotts</strong>
              </a>
            </div>
            <div>
              <div>
                <i className="fa-brands fa-github"></i> GitHub
              </div>
              <a href="https://github.com/dan-tibbotts" target="_blank">
                github.com/<strong>dan-tibbotts</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
