import { useState } from "react";

export const FormContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      setEmailError("!");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    if (!fullName || !email || !company || !subject || !message) {
      setFormError("Please fill in all required fields");
    } else if (emailError) {
      setFormError("Please correct the errors in the form");
    } else {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <section className="contact__form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="fullName" className="field">
            <div className="field__title">Full Name*</div>
            <input
              id="fullName"
              name="user_fullName"
              type="text"
              className="field__input"
              placeholder="Your Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>

          <label htmlFor="email" className="field">
            <div className="field__title">
              Your Email*{" "}
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <input
              id="email"
              name="user_email"
              type="email"
              className="field__input"
              placeholder="example@yourmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </label>

          <label htmlFor="company" className="field">
            <div className="field__title">Company*</div>
            <input
              id="company"
              name="user_company"
              type="text"
              className="field__input"
              placeholder="Your company name here"
              value={company}
              onChange={handleCompanyChange}
            />
          </label>

          <label htmlFor="subject" className="field">
            <div className="field__title">Subject*</div>
            <input
              id="subject"
              name="user_subject"
              type="text"
              className="field__input"
              placeholder="How can we help?"
              value={subject}
              onChange={handleSubjectChange}
            />
          </label>
        </div>

        <label htmlFor="message" className="field">
          <div className="field__title">Message*</div>
          <textarea
            id="message"
            name="user_message"
            className="field__input field__textarea"
            placeholder="Hello there, I would like to talk about how to..."
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </label>

        <div className="form__send">
          <button className="form__button" type="submit">
            Send Message
          </button>
          {formError && <div className="error">{formError}</div>}
        </div>
      </form>
    </section>
  );
};
