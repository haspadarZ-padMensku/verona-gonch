import React, { useContext } from 'react';
import { ThemeContext } from 'providers/Theme';
import './_styles.scss';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo">VeronaGonch</div>
      <button className="theme" onClick={toggleTheme}>
        toggle theme
      </button>
    </header>
  );
};

export default Header;
