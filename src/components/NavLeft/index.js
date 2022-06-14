import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import NavLeftLive from './NavLeftLive';
import { useDispatch, useSelector } from 'react-redux';
import { navToggle } from '../../redux/reducers';
import logo from '../../assets/images/logo.png';
// import facebook from '../../assets/images/social/facebook.png';
// import instagram from '../../assets/images/social/instagram.png';
// import twitter from '../../assets/images/social/twitter.png';
// import pinterest from '../../assets/images/social/pinterest.png';

const NavLeft = () => {

  const dispatch = useDispatch();
  const openPlusLive =  useSelector(state => state.livePlus.value);
  const mobileNav = useSelector(state => state.mobileNav.value);
  
  const Drop = (e, drop) => {
    const initialH = Math.round(e.currentTarget.firstChild.clientHeight * (100 / window.innerHeight));
    if (drop) {
      dispatch(navToggle(true));
      e.currentTarget.style.height = `${e.currentTarget.children.length * initialH }vh`;
    } else {
      dispatch(navToggle(false));
      e.currentTarget.style.height = `${initialH}vh`;
    }
  };

  return (
    <div className={mobileNav === 'left' ? "navLeft navMobileLeft" : "navLeft"}>
      <div className="navLeftUp">
        <div className="navLeftDrop">
          <ul onMouseEnter={(e) => Drop(e, true)} onMouseLeave={(e) => Drop(e, false)} className="dropMenu">
            <li className="dropLink">
              <Link to="/">
                X-c
                  <span className="spanLogoHome"><img alt="nav-logo" src={logo}></img></span>
                te
              </Link></li>
            <li className="dropLink"><Link to="/">Despre noi</Link></li>
            <li className="dropLink"><Link to="/">Contact</Link></li>
            <li className="dropLink"><Link to="/">Termeni si conditii</Link></li>
          </ul>
        </div>
        <div className={openPlusLive ? "navLeftText hideTextNav" : (mobileNav === 'left' ? "navLeftTextMobile" : "navLeftText")}>
          <h1>The Best
            <span className="spanLogo"><img className={openPlusLive ? "logoImg hideLogo" : (mobileNav === 'left' ? "logoImgMobile" : "logoImg")} alt="nav-logo" src={logo}></img></span>
            Odds You Can Get
            <span className="spanLogo"><img className={openPlusLive ? "logoImg hideLogo" : (mobileNav === 'left' ? "logoImgMobile" : "logoImg")} alt="nav-logo" src={logo}></img></span>
          </h1>
          {/* <div className="socialNav">
            <span className="spanSocial"><img id="socialImg" alt="nav-logo" src={facebook}></img></span>
            <span className="spanSocial"><img id="socialImg" alt="nav-logo" src={instagram}></img></span>
            <span className="spanSocial"><img id="socialImg" alt="nav-logo" src={twitter}></img></span>
            <span className="spanSocial"><img id="socialImg" alt="nav-logo" src={pinterest}></img></span>
          </div> */}
        </div>
      </div>
      <NavLeftLive />
    </div>
  );
};

export default NavLeft;
