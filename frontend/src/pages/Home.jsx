import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 flex justify-between flex-col bg-red-400 w-full">
        <img className="w-14 ml-8" src="https:/upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white py-5 px-10">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
        <button className="w-full bg-black text-white">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
