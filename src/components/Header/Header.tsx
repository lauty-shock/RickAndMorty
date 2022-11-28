import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.svg";
import Search from "../Search/Search";
import Theme from "../Theme/Theme";

const change: number = 240;

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (window.scrollY > change) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [scroll]);

  return (
    <div className={fixed ? `${css.containerFixed}` : `${css.container}`}>
      <img
        className={fixed ? `${css.logoFixed}` : `${css.logo}`}
        src={logo}
        alt=""
      />
      <Search fixed={fixed} />
      <Theme fixed={fixed} />
    </div>
  );
}
