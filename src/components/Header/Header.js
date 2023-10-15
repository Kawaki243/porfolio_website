import React, { useState } from 'react';
import css from './Header.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Header = () => {   
  
  const [ShowMenu, setShowMenu] = useState(false);


  const handleClick = () => {
      setShowMenu(!ShowMenu);
  };

  return(
    <div className={css.container}>
      <div className={css.header}>
            <span>Tran Pham</span>
      </div>
    
      <div className={css.right}>

            <div onClick={handleClick}>
                  {
                        ShowMenu ? <GrClose className={css.icon}/> : <AiOutlineMenu className={css.icon}/> 
                  }
            </div>
                  <ul className={ShowMenu ? [css.menu,css.active].join(' ') : [css.menu]}>
                        <li>
                              <a href='#about'>About</a>
                        </li>
                        <li>
                              <a href='#experience'>Experience</a>
                        </li>
                        <li>
                              <a href='#projects'>Projects</a>
                        </li>
                        <li>
                              <a href='#contact'>Contact</a>
                        </li>
                  </ul>
      </div>
    </div>
  );
}

export default Header
