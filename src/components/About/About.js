import './About.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quite confident, naturally curious and constantly working on
            improving my skilss to bring a more fluent user experience to the
            table.
          </p>
          <p>
            If I need to define myself in one sentence that would be an
            easygoing person, sports fanatic and daily JS coder.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
