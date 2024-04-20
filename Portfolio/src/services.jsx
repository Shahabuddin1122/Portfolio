import { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./services.module.css";
import toast from "react-hot-toast";
const Services = () => {
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
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error("Invalid email format");
    } else {
      document.getElementById("sendButton").disabled = true;
      document.getElementById("sendButton").style.backgroundColor = "#e3e6e6";

      // Enable the button after 10 minutes (600,000 milliseconds)
      setTimeout(function () {
        document.getElementById("sendButton").disabled = false;
        document.getElementById("sendButton").style.backgroundColor = "#5fbdff";
      }, 300000);

      emailjs
        .send(
          "service_50p4nqk",
          "template_0t981ji",
          { name, email, message },
          "fD-CrMLpxICJm71Ek"
        )
        .then(
          (response) => {
            console.log(response)
            toast.success("Sucessfully send");
            toast.success("After 5 minute, you can resend message");
          },
          (error) => {
            console.error(error)
            toast.error("Error to send message");
          }
        );
    }
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
            <li>Poster Design</li>
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
              <button id="sendButton" onClick={emailValidity_sub}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className={style.footer}></div>
      </div>
    </>
  );
};
export default Services;
