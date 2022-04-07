import React, { useState} from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* XOJUSTKIRST */}
            <a href="https://instagram.com/xojustkirst"><img src="https://see.fontimg.com/api/renderfont4/z89Pa/eyJyIjoiZnMiLCJoIjozMiwidyI6MTAwMCwiZnMiOjMyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WE9KVVNUS0lSU1Q/amazing-mother.png" alt="Cursive fonts"/></a>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* <Link
              class='social-icon-link instagram'
              // to='/https://instagram.com/pandapennypicks'
              target='_blank'
              aria-label='Instagram'
            >
              <a href='https://instagram.com/xojustkirst'>
                <i class='fab fa-instagram' />
              </a>
          </Link>           */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FAQ'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>*/}
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </li> 

            <li>
              {/* <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> */}
              <Link
                  class='social-icon-link instagram'
                  className='nav-links'
                  // to='/https://instagram.com/pandapennypicks'
                  target='_blank'
                  aria-label='Instagram'
                  // onClick={window.open('https://instagram.com/xojustkirst')}
                >
                  <a href='https://instagram.com/xojustkirst'> 
                    <i class='fab fa-instagram' />
                  </a>
              </Link>    
            </li>
            <li>
              <Link
                    class='social-icon-link instagram'
                    className='nav-links'
                    // to='/https://instagram.com/pandapennypicks'
                    target='_blank'
                    aria-label='Twitch'
                    // onClick={window.open('https://instagram.com/xojustkirst')}
                  >
                    <a href='https://www.twitch.tv/xojustkirst'> 
                      <i class='fab fa-twitch' />
                    </a>
                </Link> 
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
