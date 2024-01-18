import React from "react";
import s from "./search.module.css";

const SearchCard = ({ item }) => {
  return (
    <div className={s.searchCard}>
      <label className={s.searchLabel} htmlFor="">
        {item.label}
      </label>
      <input
        type="text"
        className={s.searchInput}
        placeholder={item.placeholder}
      />
    </div>
  );
};

export default SearchCard;
