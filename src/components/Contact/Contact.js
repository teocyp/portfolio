import Loader from 'react-loaders';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'default_service',
        'template_vndkbva',
        refForm.current,
        'RLhR0VRn1TtwLtk_X'
      )
      .then(
        function (response) {
          alert('Your message has been sent successfully.');
          window.location.reload(false);
        },
        function (error) {
          alert('Failed to send the message, please try again.');
        }
      );

    // emailjs
    //   .sendForm(
    //     'gmail',
    //     'template_wgc0dbk',
    //     refForm.current,
    //     'user_tWiQO8itqtvvUP0tj'
    //   )
    //   .then(
    //     () => {
    //       alert('Message has been sent.');
    //       window.location.reload(false);
    //     },
    //     () => {
    //       alert('Failed to send the message, please try again.');
    //     }
    //   );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm interested in challenging and ambitious medium to large scale
            projects. However, if you have any other request, please do not
            hesitate to contact me using below form.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message.."
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Teo Halil Artourk,
          <br />
          Cyprus,
          <br />
          Gonyeli, Nicosia, 1010 <br />
          <span>teocyp1@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.185566, 33.382275]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.185566, 33.382275]}>
              <Popup>Teo lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
}
