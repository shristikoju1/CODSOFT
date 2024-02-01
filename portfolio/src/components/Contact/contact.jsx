import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import facebook from '../../img/fb-icon.png';
import Instagram from '../../img/insta-icon.webp';
import LinkedIn from '../../img/linkedin-icon.png';
import Github from '../../img/github-icon.png';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <section className="contact">
        <h1 className="Title">Contact Me</h1>
        <span className="contactDesc">
          Get in touch! Whether you have questions, ideas, or just want to say hello, we're here and ready to connect. Your thoughts matter to us!
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea name="message" className="msg" rows="5" placeholder="Your message"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>

          <div className="links">
            <img src={facebook} alt="fb" className='link' />
            <img src={Instagram} alt="insta" className='link' />
            <img src={LinkedIn} alt="linkedin" className='link' />
            <img src={Github} alt="github" className='link' />
          </div>
        </form>
      </section>

      <footer>
        <div class="foot-panel4">
          <div class="logo"></div>
          <p class="happy">Explore, Create, Connect.<br /> Welcome to my world.</p>
        </div>
        <div class="foot-panel5">

          <div class="pages">
          <a href="#conditions-of-use">Conditions of Use |</a>
          <a href="#privacy-notice">Privacy Notice |</a>
          <a href="#your-ads">Your Ads |</a>
          <a href="#privacy-choices">Privacy | Choices</a>
          </div>
          
          <div class="copyright">
            <i class="fa-regular fa-copyright"></i> 1996-2023, shristikoju.com.np, Inc. or its affiliations
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
