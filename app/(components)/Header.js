import React from "react";

export default function Header() {
  return (
    <div >
      <div className="bg-gradient-to-br from-indigo-950 to-indigo-500 h-60 rounded-t-2xl flex justify-center items-center ">
        <div className="text-white text-center">
          <div className="flex justify-center items-center">
            <h2 className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 flex items-center justify-center text-4xl font-bold text-white mb-2">
              YB
            </h2>
          </div>
          <article>
            <h3 className="text-2xl font-bold py-2">Your Business</h3>
            <p className="text-md font-medium text-gray-100">Your compelling tagline goes here</p>
          </article>
        </div>
      </div>
    </div>
  );
}
