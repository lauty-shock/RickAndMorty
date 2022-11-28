import React, { useEffect, useState } from "react";
import css from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

interface Props {
  fixed: boolean;
}

const Search = ({ fixed }: Props) => {
  return (
    <div
      className={
        fixed ? `${css.containerSearchFixed}` : `${css.containerSearch}`
      }
    >
      <input
        className={css.search}
        type="text"
        placeholder="Start typing to search..."
      />
      <span className={css.icon}>
        <BsSearch />
      </span>
    </div>
  );
};

export default Search;
