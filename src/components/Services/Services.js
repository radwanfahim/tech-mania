import {
  faArrowRight,
  faBolt,
  faCheckCircle,
  faCloudArrowDown,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "./img/Service 24_7.gif";

const Services = () => {
  return (
    <section className="services mt-20 container mx-auto">
      <h1 className="text-center text-5xl font-semibold text-neutral-700">
        Our <span className="text-indigo-600">Services</span>
      </h1>

      <div className="flex items-center md:mx-0 mx-5 md:flex-row flex-col gap-20 mt-10">
        <img className="w-1/2" src={img} alt="" />

        <div>
          <h1 className="text-4xl mb-5 text-neutral-700 md:text-start text-center">
            Change the way you build websites
          </h1>

          <h1 className="text-neutral-500 md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consequuntur, officia nemo cum quidem nihil omnis nesciunt fuga hic
            neque itaque culpa cumque.
          </h1>

          <ul className="mt-5 text-neutral-500 font-bold">
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Web Development Solutions for Tomorrow</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Our Talented & Experienced Developer</h1>
            </li>
            <li className="flex items-center  gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>24Hour Support</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:mt-40 mt-10">
        <h1 className="text-center md:text-5xl text-4xl md:mx-0 mx-5 font-semibold text-neutral-700 leading-tight">
          Speed up your development <br /> with
          <span className="text-violet-600"> Tech Mania.</span>
        </h1>

        <div className="mt-20 grid md:grid-cols-3 place-content-center mx-20">
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg hover:scale-105 ">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faDatabase}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              End To End Encription
            </h1>
            <h1 className="text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
              repellendus, beatae veniam atque voluptatibus.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg hover:scale-105">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faBolt}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              Fast Service
            </h1>
            <h1 className="text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
              repellendus, beatae veniam atque voluptatibus.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg  hover:scale-105 ">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faCloudArrowDown}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              Cloude Computing
            </h1>
            <h1 className="text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
              repellendus, beatae veniam atque voluptatibus.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
