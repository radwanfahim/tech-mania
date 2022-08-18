import React from "react";

const User = (props) => {
  const { email } = props.user;
  const { large } = props.user.picture;
  const { first, last } = props.user.name;

  return (
    <div className="shadow-2xl hover:scale-105 hover:cursor-pointer py-10 px-5 rounded-2xl justify-items-center">
      <img
        className="block mx-auto rounded-full ring-2 ring-gray-300 p-1"
        src={large}
        alt=""
      />
      <h1 className="mt-4 text-3xl font-bold text-indigo-600">
        {first} {last}
      </h1>
      <h1 className="text-neutral-500 font-normal">{email}</h1>
      <h1 className="text-neutral-400 mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        veritatis.
      </h1>
    </div>
  );
};

export default User;
