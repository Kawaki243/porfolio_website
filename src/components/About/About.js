import React from 'react';
import css from './About.module.css';
import aboutme from '../../assets/about-pic.png';
import experience from '../../assets/experience.png';
import education from '../../assets/education.png';

const About = () => {
  return (
      <div className={css.container}>
      <a className='anchor' id="about"></a>
            <div className={css.header}>
                  <span>En savoir plus</span>
                  <span>A propos de moi</span>
            </div>

            <div className={css.main}>
                  <img src={aboutme} alt="about me"/>
                  <div className={css.right}>
                        <div className={css.images}>
                              <div className={css.item}>
                                    <img src={experience} />
                                    <span>
                                          Experience
                                    </span>
                                    <span>
                                          1+ months
                                    </span>
                                    <span>
                                          Frontend Development
                                    </span>
                              </div>
                              <div className={css.item}>
                                    <img src={education} />
                                    <span>
                                          Éducation
                                    </span>
                                    <span>
                                          Licence 2 Informatique
                                    </span>
                                    <span>
                                         Université de Strasbourg
                                    </span>
                              </div>
                        </div>
                        <p>Je suis développeur front-end, même si je n'ai pas beaucoup d'expérience, mais je suis réceptif, à l'écoute et désireux d'apprendre. Je veux toujours compléter mes produits de la manière la plus parfaite et la plus parfaite</p>
                  </div>
            </div>
      </div>
  )
}

export default About
