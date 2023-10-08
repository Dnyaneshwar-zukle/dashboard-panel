import React from "react";
import ImageOne from "../../assets/Vuexy-Vuejs-Admin-Dashboard-Template.png";

const Charts = () => {
  return (
    <div>
      <div class="flex mb-4">
        <div class="w-ful">
          <h1 className="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h1>
        </div>
      </div>

      {/*  Two columns    */}
      <div class="flex gap-5 lg:flex-nowrap flex-wrap  mb-4 2xl:flex-col">
        <div class="w-full lg:w-1/2">
          <img className="w-full" src={ImageOne} alt="" />
        </div>
        <div class="w-full lg:w-1/2">
          <img className="w-full" src={ImageOne} alt="" />
        </div>
      </div>

      {/*  Three columns    */}
      <div class="flex gap-5 lg:flex-nowrap flex-wrap  mb-4 2xl:flex-col">
        <div class="w-full lg:w-1/3">
          <img className="w-full" src={ImageOne} alt="" />
        </div>
        <div class="w-full lg:w-1/3">
          <img className="w-full" src={ImageOne} alt="" />
        </div>
        <div class="w-full lg:w-1/3">
          <img className="w-full" src={ImageOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Charts;
