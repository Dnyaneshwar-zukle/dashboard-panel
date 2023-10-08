import React from "react";
import Intensity from "./chartComponents/Intensity";
import Country from "./chartComponents/Country";
import Likehood from "./chartComponents/Likelihood";
import Relevance from "./chartComponents/Relevance";
import Year from "./chartComponents/Year";

const Charts = () => {
  return (
    <div>
      <div class="flex mb-4">
        <div class="w-ful">
          <Country />
        </div>
      </div>

      {/*  Two columns    */}
      <div class="flex gap-5 lg:flex-nowrap flex-wrap  mb-4 2xl:flex-col">
        <div class="w-full lg:w-1/2">
          <Intensity />
        </div>
        <div class="w-full lg:w-1/2">
          <Likehood />
        </div>
      </div>

      {/*  Three columns    */}
      <div class="flex gap-5 lg:flex-nowrap flex-wrap  mb-4 2xl:flex-col">
        <div class="w-full lg:w-1/3">
          <Relevance />
        </div>
        <div class="w-full lg:w-1/3">
          <Year />
        </div>
        <div class="w-full lg:w-1/3">
          <Intensity />
        </div>
      </div>
    </div>
  );
};

export default Charts;
