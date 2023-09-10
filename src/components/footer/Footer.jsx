import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer footer">
        <div className="footer__container container">
            <h1 className="footer__title">Muhammed Anwar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/muhammedahmedanwar/" className="footer__social-link" target="_blank"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/muhammed-ahmed-anwar-8a5433213/" className="footer__social-link" target="_blank"><i class="bx bxl-linkedin"></i></a>
            <a href="https://github.com/muhammedahmedanwar" className="footer__social-link" target="_blank"><i class="bx bxl-github"></i></a>
            </div>
            <span className='footer__copy'>
                &#169; JimmyZ. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer