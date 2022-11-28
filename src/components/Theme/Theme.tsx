import React from "react";
import css from "./Theme.module.css";

interface Props {
  fixed: boolean;
}

const Theme = ({ fixed }: Props) => {
  return (
    <div
      className={fixed ? `${css.containerThemeFixed}` : `${css.containerTheme}`}
    >
      <span>Dark</span>
      <div className={css.theme}></div>
    </div>
  );
};

export default Theme;
