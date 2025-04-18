import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center gap-3 m-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 outline-none "
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 "
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
