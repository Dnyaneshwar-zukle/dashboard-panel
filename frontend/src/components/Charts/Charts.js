import React, { useEffect, useState } from "react";
import Intensity from "./chartComponents/Intensity";
import Country from "./chartComponents/Country";
import Likehood from "./chartComponents/Likelihood";
import Relevance from "./chartComponents/Relevance";
import Year from "./chartComponents/Year";

const Charts = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/getAll")
      .then((response) => response.json())
      .then((data) => {
        setStoreData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex gap-5 lg:flex-nowrap flex-wrap mb-4 2xl:flex-col">
        <div className="w-full lg:w-1/2 border border-cyan-500 rounded-md p-3">
          <Intensity data={storeData} />
        </div>
        <div className="w-full lg:w-1/2 border border-cyan-500 rounded-md p-3">
          <Likehood data={storeData} />
        </div>
      </div>

      <div className="flex gap-5 lg:flex-nowrap flex-wrap mb-4 2xl:flex-col">
        <div className="w-full lg:w-1/3 border border-cyan-500 rounded-md p-3">
          <Relevance data={storeData} />
        </div>
        <div className="w-full lg:w-1/3 border border-cyan-500 rounded-md p-3">
          <Year data={storeData} />
        </div>
        <div className="w-full lg:w-1/3 border border-cyan-500 rounded-md p-3">
          <Intensity data={storeData} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
