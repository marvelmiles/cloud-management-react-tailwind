import React from "react";
import {
  CloudArrowUpIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200">
      <div className="grid md:grid-cols-2 place-items-center my-auto justify-items-center max-w-screen-xl p-4 m-auto">
        <div className="justify-self-center">
          <p className="text-2xl text-indigo-600 font-bold italic">
            Unique Sequencing & Production
          </p>
          <h1 className="py-3 text-3xl sm:text-6xl  font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl text-indigo-600 italic">
            This is our Tech brand.
          </p>
          <button className="py-3 px-6 w-full my-4">Get Started</button>
        </div>
        <div className="">
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
      <div
        className="absolute flex flex-col w-full max-w-3xl bottom-0 md:bottom-24
         md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl p-0 md:p-2 md:py-10"
      >
        <p className="text-3xl  my-3">Data Services</p>
        <div className="flex justify-between flex-col md:flex-row px-4">
          <p className="flex  py-2 text-slate-500">
            <CloudArrowUpIcon className="h-6 text-indigo-600 mr-2" />
            App Security
          </p>
          <p className="flex  py-2 text-slate-500">
            <CircleStackIcon className="h-6 text-indigo-600 mr-2" /> Dashboard
            Design
          </p>
          <p className="flex  py-2 text-slate-500">
            <ServerStackIcon className="h-6 text-indigo-600  mr-2" /> Cloud Data
          </p>
          <p className="flex  py-2 text-slate-500">
            <PaperAirplaneIcon className="h-6 text-indigo-600 mr-2" /> API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
