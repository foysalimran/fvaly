import React from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}

export default Header;
