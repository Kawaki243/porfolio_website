import React from 'react';
import css from './Projects.module.css';
import { SliderProjects } from '../../data/projects';

const Projects = () => {
  return (
    <div className={css.wrapper}>
      <a className='anchor' id="projects"></a>
      <span>Browse My Recent</span>
      <span>Projects</span>
      <div className={css.container}>
            {
                  SliderProjects.map((project, i) => (
                        <div className={css.item}>
                              <img src={project.img} key={i} alt=""/>
                              <span>{project.name}</span>
                              <div className={css.buttons}>
                                    <a href={project.gitlink} target="_blank" className={css.button}>GitHub</a>
                                    <a href={project.demolink} target="_blank" className={css.button}>Live Demo</a>
                              </div>
                        </div>
                  ))
            }
      </div>
    </div>
  )
}

export default Projects
