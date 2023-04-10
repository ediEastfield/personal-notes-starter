import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiArchive, FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import { ThemeConsumer } from '../contexts/ThemeContext';

function Navigation({ logout, name }) {
  return (
    <ThemeConsumer>
      {
        ({ theme, toggleTheme}) => {
          return (
            <nav className="navigation">
              <ul>
                <li><button onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                <li><Link to="/"><FiHome /></Link></li>
                <li><Link to="/archive"><FiArchive /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
              </ul>
            </nav>
          )
        }
      }
    </ThemeConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};


export default Navigation;