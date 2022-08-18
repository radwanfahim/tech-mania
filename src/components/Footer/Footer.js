import React from "react";
import "./Footer.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer mt-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7c3aed"
          fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,208C672,203,768,245,864,261.3C960,277,1056,267,1152,250.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <article className="bg-violet-600 px-10 pb-20 pt-10 md:grid grid-cols-3 gap-10">
        <div className="">
          <h1 className="text-xl text-white md:text-start text-center">
            Tech Mania
            <FontAwesomeIcon
              className="text-white pl-2"
              icon={faCode}
            ></FontAwesomeIcon>
          </h1>
          <h1 className="my-4 text-white md:block hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            nam debitis aperiam et dolorum atque <br /> repudiandae at earum
            reiciendis.
          </h1>
        </div>

        <div className="md:block hidden mx-auto">
          <h1 className="text-neutral-100 font-semibold text-xl">Community</h1>
          <h1 className="mt-3 text-white cursor-pointer">
            <a href="https://twitter.com/Fahim_Ahmed_98" target={{}}>
              Twitter
            </a>
          </h1>
          <h1 className="text-white cursor-pointer mt-2">
            <a href="https://github.com/Fahimahmed71" target={{}}>
              Github
            </a>
          </h1>
          <h1 className="text-white cursor-pointer mt-2">
            <a
              href="https://www.linkedin.com/in/fahim-ahmed-762350238/"
              target={{}}
            >
              Linkdin
            </a>
          </h1>
        </div>

        <div className=" md:text-start md:mt-0 mt-5 text-center ">
          <h1 className="text-neutral-100 font-semibold text-xl">Newsletter</h1>
          <h1 className="text-white mt-3">
            Sign up and receive the latest tips via email.
          </h1>
          <label class="block md:mt-5 ">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Email
            </span>
            <input
              type="email"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block md:m-0 m-auto w-1/2 rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
            />
          </label>
          <button className="bg-indigo-500 mt-3 px-10 py-2 rounded-md text-white text-lg hover:bg-indigo-400">
            Subscribe
          </button>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
