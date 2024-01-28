import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./services.module.css";

const services = () => {
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleTextareaResize = (event) => {
    // Set the height of the textarea dynamically
    setTextareaHeight(`${event.target.scrollHeight}px`);
  };
  const nameInput = (event) => {
    setName(event.target.value);
  };
  const emailValidity_sub = (e) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name);
    if (!isValidEmail) {
      console.log("Invalid email format!");
    }
    console.log(email);
    console.log(name);
    console.log(message);

    e.preventDefault();

    emailjs
      .send(
        "service_50p4nqk",
        "template_0t981ji",
        { name, email, message },
        "fD-CrMLpxICJm71Ek"
      )
      .then(
        (response) => {
          console.log("Sent successfully:", response);
        },
        (error) => {
          console.log("Failed to send:", error);
        }
      );
  };
  return (
    <>
      <div className={style.services}>
        <div className={style.header}>
          <h2>My Services</h2>
        </div>
        <div className={style.middle}>
          <ul>
            <li>UI/UX Design</li>
            <li>Website development</li>
            <li>App development</li>
            <li>Software project management</li>
            <li>Software testing</li>
            <li>Database design</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>
        <div className={style.contract}>
          <div className={style.head_contract}>
            <h2>Contract</h2>
          </div>
          <div className={style.inputBox}>
            <div className={style.email}>
              <input
                type="text"
                name="name"
                id="nameInput"
                value={name}
                onChange={nameInput}
                required
              />

              <p>Name</p>
            </div>
            <div className={style.email}>
              <input
                type="text"
                name="name"
                id="nameInput"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <p>Email</p>
            </div>
            <div
              className={style.text}
              style={{ marginBottom: textareaHeight }}
            >
              <textarea
                name="message"
                id="message"
                placeholder="Write here"
                value={message}
                style={{ height: textareaHeight }}
                onResize={handleTextareaResize}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
            </div>
            <div className={style.button}>
              <button onClick={emailValidity_sub}>Send</button>
            </div>
          </div>
        </div>
        <div className={style.footer}></div>
      </div>
    </>
  );
};
export default services;
