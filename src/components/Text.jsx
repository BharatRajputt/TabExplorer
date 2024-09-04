import React, { useState } from "react";

const Text = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full max-w-md bg-gray-600 p-5 rounded-lg shadow-lg">

      <div className="flex flex-col md:flex-row justify-around mb-4 bg-black rounded-xl">

        <button
          className={`px-4 py-2 rounded-lg mb-2 md:mb-0 ${
            activeTab === "about"
              ? "bg-gray-800 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded-lg mb-2 md:mb-0 ${
            activeTab === "experiences"
              ? "bg-gray-800 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`px-4 py-2 rounded-lg mb-2 md:mb-0 ${
            activeTab === "recommended"
              ? "bg-gray-800 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>
      <div className="text-gray-300 text-sm">
        {activeTab === "about" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. <br /><br />
            I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ellia. Both of them are just starting school, so my calendar is usually blocked between 9-10AM.
          </p>
        )}
        {activeTab === "experiences" && (
          <p>
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. <br /><br />
          I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ellia. Both of them are just starting school, so my calendar is usually blocked between 9-10AM.
        </p>
        )}
        {activeTab === "recommended" && (
         <p>
         Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. <br /><br />
         I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ellia. Both of them are just starting school, so my calendar is usually blocked between 9-10AM.
       </p>
        )}
      </div>
    </div>
  );
};

export default Text;
