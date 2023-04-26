import React, { useState } from 'react';
import './About.css';

function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, email, message };
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error(error);
    }
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="about-container">
      <h1 className='title'>About</h1>
      <div className="about-content">
        <img
          className="about-image"
          src="https://beyondtheflag.com/wp-content/uploads/getty-images/2021/07/1326951770.jpeg"
          alt="Formula 1 fan"
        />
        <div className="about-text-container">
          <p className="about-text">
            Hi, my name is Martin and I'm a huge Formula 1 fan. I've been following the sport for years and have always been fascinated by the speed, technology, and strategy that goes into every race. 
          </p>
          <p className="about-text">
            I created this website to share my passion for Formula 1 with others and to provide a platform for fans to stay up-to-date on the latest news, analysis, and race results. I believe that Formula 1 is more than just a sport – it's a community of fans from around the world who share a love for racing and the pursuit of excellence.
          </p>
          <p className="about-text">
            Whether you're a long-time fan or just getting into the sport, I hope that this website will be a valuable resource for you. Feel free to explore the articles, videos, and other content, and don't hesitate to reach out if you have any questions or feedback. Thanks for visiting!
          </p>
        
        <div>
        <div className="contact-me">
            <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
          </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default About;


