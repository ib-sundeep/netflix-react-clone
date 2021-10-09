import React, { useEffect, useState } from "react";
import classNames from 'classnames';

import avatar from 'assets/avatar.png';
import logo from 'assets/logo-full.png';

function Header() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "header",
        { 'header--float': floating }
      )}
    >
      <img
        className="header__logo"
        src={logo}
        alt="Netflix logo"
      />
      <img
        className="header__avatar"
        src={avatar}
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Header;