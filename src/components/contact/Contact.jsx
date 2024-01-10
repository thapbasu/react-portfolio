import React, { useRef } from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert library
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lfjjugn',
        'template_s4nheca',
        form.current,
        'KIGVUASJ1vQYTO5UH'
      )
      .then(
        (result) => {
          console.log(result.text);

          if (result.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully!',
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                container: 'custom-swal-container',
              },
            });
          }
        },
        (error) => {
          console.log(error.text);

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to send message. Please try again.',
            customClass: {
              container: 'custom-swal-container',
            },
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <MdEmail className="contact__option-icon" />
            <h5>thapabasu000@gmail.com</h5>
            <a href="mailto:thapabasu000@gmail.com" className="gmail-button ">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <h4>Messenger</h4>
            <FaFacebookMessenger className="contact__option-icon" />
            <h5>Basu Thapa</h5>
            <a
              href="https://m.me/Shield.thapa/"
              className="messenger-button"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <h4>Whatsapp</h4>
            <IoLogoWhatsapp className="contact__option-icon" />
            <h5>+977 9817112439</h5>
            <a
              href="https://wa.me/9779817112439"
              className="whatsapp-button"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary mobile-responsive">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
