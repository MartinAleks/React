import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  //const form = useRef();

  const sendEmail = () => {
    const data = {
      "from_name" : nameRef.current.value,
      "from_email" : emailRef.current.value,
      "message" : messageRef.current.value
    }

    emailjs.send('service_8jo76b5', 'template_412uqjb', data, 'VBrkd4uU2Wd3zwt73')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label> <br />
      <input type="text" ref={nameRef} /> <br />
      <label>Email</label> <br />
      <input type="email" ref={emailRef} /> <br />
      <label>Message</label> <br />
      <textarea name="message" ref={messageRef}/> <br />
      <button onClick={sendEmail}>Send</button>
    </div>
  );
};

export default ContactUs