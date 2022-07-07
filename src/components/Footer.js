import React from 'react';
import './Footer.css';
// import { contractAddress } from './HeroSection.js';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          More to come soon!
        </p> */}
        {/* <a
          href={`https://rinkeby.etherscan.io/address/${contractAddress}`}
        >
          {contractAddress}
        </a> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class='footer-links'>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/donate'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div> */}
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            {/* <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              XOJUSTKIRST
            </Link>
          </div>
          <small class='website-rights'>POPNFT © 2021</small>
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            <Link
              class='social-icon-link instagram'
              // to='/https://instagram.com/pandapennypicks'
              target='_blank'
              aria-label='Instagram'
            >
              <a href='https://instagram.com/xojustkirst'>
                <i class='fab fa-instagram' />
              </a>
            </Link>
            <Link
                class='social-icon-link instagram'
                target='_blank'
                aria-label='Twitch'
                // onClick={window.open('https://instagram.com/xojustkirst')}
              >
                <a href='https://www.twitch.tv/xojustkirst'> 
                  <i class='fab fa-twitch' />
                </a>
            </Link> 
            <Link
                class='social-icon-link instagram'
                target='_blank'
                aria-label='Twitch'
                // onClick={window.open('https://instagram.com/xojustkirst')}
              >
                <a href='https://www.tiktok.com/@xojustkirst?lang=en'> 
                <i class="fab fa-tiktok"/>
                </a>
            </Link> 
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href='https://discord.com/invite/KSsCJBW5NT'>
                <i class="fa-brands fa-discord"></i>
              </a>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
