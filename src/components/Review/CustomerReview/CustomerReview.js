import React, { useEffect, useState } from "react";
import User from "./User/User";

const CustomarReview = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUser(data.results));
  }, []);

  return (
    <section className="customer mt-20 container mx-auto">
      <h1 className="text-center font-semibold text-4xl text-neutral-700 md:mx-0 mx-3">
        What Our <span className="text-indigo-600">Clients</span> Say About Us
      </h1>
      <h1 className="text-center text-neutral-500 mt-3 md:mx-0 mx-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error hic
        ullam maxime harum eligendi et eaque voluptas minus velit! Odit.
      </h1>

      <dl className="my-20 grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl border shadow-md rounded-md text-neutral-600 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">100+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Developers
          </dd>
        </div>

        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">5k+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Client's
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">3k+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Companies
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold">1k+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Organizations
          </dd>
        </div>
      </dl>

      <div className="grid md:grid-cols-3  gap-10 text-center mt-20 ">
        {user.map((user) => (
          <User user={user} key={user.id.value}></User>
        ))}
      </div>
    </section>
  );
};

export default CustomarReview;
