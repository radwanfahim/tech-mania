import React from "react";
import img from "./img/Interview.gif";
import { Link } from "react-router-dom";

const HireUs = () => {
  return (
    <section className="hire-us mt-20 container mx-auto">
      <dl className="flex md:gap-40 gap-10 items-center md:flex-row flex-col-reverse">
        <img src={img} alt="" />

        <div className="md:text-start text-center">
          <h1 className="text-5xl text-indigo-600 font-semibold">Hire Us</h1>
          <p className="mt-3 text-neutral-500 md:pr-20 md:px-0 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            iure perspiciatis enim libero, dolorem inventore dolorum recusandae
            sequi ipsum atque minus repudiandae. Quis quae minima, quaerat animi
            quia dolorem reiciendis?
          </p>

          <Link to="form">
            <button className="bg-indigo-600 hover:bg-indigo-400 text-white px-5 py-3 rounded-xl mt-5 md:inline-block block mx-auto">
              Register
            </button>
          </Link>
        </div>
      </dl>
    </section>
  );
};

export default HireUs;
