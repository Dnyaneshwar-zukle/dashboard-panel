import React from "react";
import { CiSearch } from "react-icons/ci";
import Profile from "../../assets/avatar.png";

const Search = () => {
  return (
    <header className="sticky top-4 border bg-blue-950 border-cyan-50 rounded-md h-16 flex items-center pl-3 pr-12">
      <div className="flex justify-between w-full">
        <div className="search flex items-center gap-2">
          <CiSearch />
          <h2 className="text-xs font-medium	text-white">Search</h2>
        </div>
        <div className="profile h-10 w-10 h-10 rounded-full overflow-hidden	">
          <img src={Profile} alt="Profile Name" />
        </div>
      </div>
    </header>
  );
};

export default Search;
