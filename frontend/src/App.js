import "./css/main.css";
import Sidebar from "./components/Sidebar";
import Search from "./components/SearchHeader";
import Charts from "./components/Charts/Charts";
import React, { useEffect, useState } from "react";

function App() {
  const [toggles, setToggles] = useState({
    sideSlide: true,
  });

  return (
    <>
      <section className="relative bg-blue-950">
        <div className="flex">
          <div className="sidebar">
            <Sidebar toggle={toggles} setToggle={setToggles} />
          </div>
          <div className={toggles ? "pl-74 pr-8 w-full" : "w-full pl-8 pr-8"}>
            <Search />
            <div className="mt-20">
              <Charts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
