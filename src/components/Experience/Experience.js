import React from 'react';
import css from './Experience.module.css';
import checkmark from '../../assets/checkmark.png';

const Experience = () => {
  return (
    <div className={css.wrapper}>
      <a className='anchor' id='experience'></a>
      <span>Explore My</span>
      <span>Experience</span>
      <div className={css.container}>
            <span>Frontend Development</span>
            <ul className={css.items}>
                  <li className={css.item}>
                        <img src={checkmark} alt='' />
                        <span>HTML</span>
                  </li>
                  <li className={css.item}>
                        <img src={checkmark} alt='' />
                        <span>CSS</span>
                  </li>
                  <li className={css.item}>
                        <img src={checkmark} alt='' />
                        <span>JavaScript</span>
                  </li>
                  <li className={css.item}>
                        <img src={checkmark} alt='' />
                        <span>SASS</span>
                  </li>
                  <li className={css.item}>
                        <img src={checkmark} alt='' />
                        <span>React JS</span>
                  </li>
            </ul>
      </div>
    </div>
  )
}

export default Experience
