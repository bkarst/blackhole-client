/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState, useRef } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import Link from 'next/link'
import useOnclickOutside from "react-cool-onclickoutside";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";


import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const logoSize = 25

  return (
    <header className="Header">
      <img src="../img/logo10.png" className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link className='header-link' href="/">
            Home
          </Link>
          <Link className='header-link' href="/voting">
            Voting
          </Link>
          <Link className='header-link' href="/">
            Claim
          </Link>
          <div style={{display:'flex', flexDirection: 'row'}}>
            <div className="social-icons">
            <a rel="noreferrer" href='https://twitter.com/BlackHoleLLC' target="_blank">
                                <FaTwitter size={logoSize} />
                            </a>
            </div>
            <div className="social-icons">
            <a rel="noreferrer" href='https://discord.com/invite/pY6cj2vNJD' target="_blank">
                                <img src={'/img/Discord-Logo-White.png'} style={{width: logoSize}} />
                            </a>
            </div>
            <div className="social-icons">
            <a rel="noreferrer" href='https://t.me/+YnPA2Dw4EE4yNGUx' target="_blank">
                                <img src={'/img/telegram2.png'} style={{width: logoSize}} />
                            </a>
            </div>
          </div>
          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
