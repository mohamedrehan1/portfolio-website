import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/logo-m.png';
import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import Logo from './logo/Logo';
import './Home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['o', 'h', 'a', 'm', 'e', 'd'];
  //prettier-ignore
  const jobArray = [
    'w','e','b',' ','d','e','v','e','l','o','p','e','r','.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="M" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    <Loader  type='pacman'/>
    </>
  );
};

export default Home;
