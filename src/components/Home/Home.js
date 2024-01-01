import { Link } from 'react-router-dom';
import './Home.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['T', 'e', 'o'];
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / Javascript & React Enthusiast</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}
