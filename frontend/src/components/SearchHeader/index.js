import React from "react";
import { CiSearch } from "react-icons/ci";
// import WhatsApp from "../../assets/WhatsApp.webp";
const Search = () => {
  return (
    <header className="sticky top-4 border w-full bg-blue-950 border-cyan-500 rounded-md h-16 flex items-center pl-3 pr-3">
      <div className="flex justify-between w-full">
        <div className="search flex items-center gap-2">
          <CiSearch />
          <h2 className="text-xs font-medium	text-white">Search</h2>
        </div>
        {/* <div className="profile h-10 w-10 h-10 rounded-full overflow-hidden	">
          <img src={WhatsApp} alt="Profile Name" />
        </div> */}
      </div>
    </header>
  );
};

export default Search;
