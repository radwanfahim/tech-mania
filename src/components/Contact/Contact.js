import React from "react";
import img from "./img/Business deal.gif";

const Contact = () => {
  return (
    <section className="contact mt-20 container mx-auto ">
      <dl className="flex justify-between md:flex-row flex-col items-center gap-10">
        <div className="md:text-start text-center">
          <h1 className="text-5xl text-indigo-600 font-semibold">
            Get In Touch
          </h1>
          <p className="md:pr-24 px-5 mt-5 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa
            soluta accusamus consectetur, itaque obcaecati veniam ipsam omnis
            quae maxime.
          </p>

          <input
            className="mt-5 rounded"
            type="text"
            name=""
            id=""
            placeholder="Say Something"
          />
          <button className="bg-indigo-600 px-5 py-2 text-white font-bold">
            Send
          </button>
        </div>

        <img className="" src={img} alt="" />
      </dl>
    </section>
  );
};

export default Contact;
