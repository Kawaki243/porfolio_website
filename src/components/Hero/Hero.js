import React from 'react';
import css from './Hero.module.css';
import profileimage from '../../assets/profile-pic.jpg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
            <img src={profileimage} className={css.image}/>
            <div className={css.right}>
                  <span>Bonjour Je m'appelle</span>
                  <span>Tran Pham</span>
                  <span>Frontend Developer</span>
                  <div className={css.buttons}>
                        <a href='../../assets/resume' target='_blank'>Download CV</a>
                        <a href='#contact'>Contact Info</a>
                  </div>
                  <div className={css.icons}>
                        <a href="https://www.linkedin.com/in/tran-minh-duc-pham-5ab351256/" target="_blank"><img src={linkedin} /></a>
                        <a href="https://github.com/Kawaki243" target="_blank"><img src={github} /></a>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default About
