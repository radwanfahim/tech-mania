import React from "react";
import img from "./img/Online Review.gif";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Review.css";
import img1 from "./img/slide.png";
import img2 from "./img/slide-02.png";
import img3 from "./img/slide-03.png";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <section className="review mt-20 container mx-auto">
      <article className="flex justify-between md:flex-row flex-col  gap-10 items-center">
        <div>
          <h1 className="text-5xl text-neutral-600 font-semibold md:text-start text-center">
            Customar{" "}
            <span className="text-indigo-600 md:inline-block block ">
              Review
            </span>
          </h1>
          <h1 className="mt-7 md:mr-20 md:mx-0 mx-5 text-neutral-500 md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptas tempora dignissimos soluta enim odit sit exercitationem ea
            vitae, explicabo, iste ut ex pariatur officia, dolores quis nisi
            eligendi. Dolorem.
          </h1>

          <Link to="customer">
            <button className="bg-indigo-600 hover:bg-indigo-400 text-white px-5 py-3 rounded-xl mt-5 md:inline-block block mx-auto">
              Show More
            </button>
          </Link>
        </div>

        <img className="md:w-1/2 w-full" src={img} alt="" />
      </article>

      <Splide
        className="mt-40 -z-10 md:mx-0 mx-5"
        options={{
          rewind: true,
          autoplay: "true",
        }}
        hasTrack={false}
        aria-label="..."
      >
        <div className="custom-wrapper">
          <SplideTrack>
            <SplideSlide>
              <img className="mx-auto" src={img1} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="mx-auto" src={img2} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="mx-auto" src={img3} alt="" />
            </SplideSlide>
          </SplideTrack>
          <div className="splide__progress mt-5">
            <div className="splide__progress__bar" />
          </div>
        </div>
      </Splide>
    </section>
  );
};

export default Review;
