import React from 'react'
import { Button } from './Button'
import '../components/styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaTypo3, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best
                    vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <label htmlFor="email" className='hide'>E-mail</label>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>

                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href='https://pt-br.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">Youtube</a>
                        <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL
                            <FaTypo3 />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © 2020</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </a>

                        <a
                            className='social-icon-link instagram'
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </a>

                        <a
                            className='social-icon-link youtube'
                            href='https://www.youtube.com/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </a>

                        <a
                            className='social-icon-link twitter'
                            href='https://www.twitter.com/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </a>

                        <a
                            className='social-icon-link twitter'
                            href='https://br.linkedin.com/'
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
