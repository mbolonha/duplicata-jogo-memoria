import { React } from "../dependencies";
import { FaChalkboardTeacher, FaPassport } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
// import Logo from 'svg-react-loader?name=Logo!../../../../static/assets/images/edu4dev-logo-ULTIMATE.svg'
import Logo from "../../../../static/assets/images/edu4dev-logo-ULTIMATE.svg";
// import DarkMode from '../containers/darkmode'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MenuContainer from "../containers/MenuContainer";

import { StaticImage } from "gatsby-plugin-image";

const Header = ({
  logo,
  menuImg,
  Hero,
  refState,
  handleRefState,
  darkCandleImg,
}) => {
  return (
    <header>
      <div className='main-header'>
        <div className='header-columns toggle-menu desktop-only'>
          <input
            type='checkbox'
            id='check-toggle-icon'
            onChange={handleRefState}
          />
          <label
            htmlFor='check-toggle-icon'
            className={`menu-wrapper ${refState ? "active" : "not-active"}`}
          >
            <div className='menu-bar-icon'>
              <FaChalkboardTeacher className='FaChalkboardTeacher icon-main-menu-left' />
            </div>
            <div className='icon-text desktop-only'>
              <strong>Menu</strong>
            </div>
          </label>
        </div>

        <div className='header-columns'>
          <a href='/' className='logo-link'>
            <Logo style={{ display: "block", height: "50px" }} />
          </a>
        </div>
        {/* <div className='header-columns desktop-only'>
          <strong>
            <a href='/' className='contact-button'>
              <FaPassport className='FaPassport icon-main-menu-right' />
              RÖÖM
            </a>
          </strong>
        </div> */}
        {/* <DarkMode darkCandleImg={darkCandleImg} /> */}
      </div>

      <MenuContainer refState={refState} handleRefState={handleRefState} />

      {Hero}
    </header>
  );
};

export default Header;
