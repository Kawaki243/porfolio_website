import React from 'react';
import css from './Contact.module.css';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
  return (
    <div className={css.wrapper}>
      <a className='anchor' id="contact"></a>
      <div className={css.infomation}>
            <span>Get In Touch</span>
            <span>Contact Me</span>
            <div className={css.items}>
                  <div className={css.item}>
                        <img src={email} />
                        <p>ducprodapchai243@gmail.com</p>
                  </div>
                  <div className={css.item}>
                        <img src={linkedin} />
                        <a href="https://www.linkedin.com/in/tran-minh-duc-pham-5ab351256/">Linkedin</a>
                  </div>
            </div>
      </div>
      <div className={css.footer}>
            <ul className={css.lists}>
                  <li className={css.item}>
                        <a href="#about">About</a>
                  </li>
                  <li className={css.item}>
                        <a href="#experience">Experience</a>
                  </li>
                  <li className={css.item}>
                        <a href="#projects">Projects</a>
                  </li>
                  <li className={css.item}>
                        <a href="#contact">Contact</a>
                  </li>
            </ul>
            <p>Copyright © 2023 Tran Pham. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Contact
