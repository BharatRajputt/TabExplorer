import React from "react";
import Text from "./components/Text";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-800">
     
      <div className="hidden md:block w-1/2 bg-gray-800"></div>
     
      <div className="w-full md:w-3/5 lg:w-2/5 flex justify-center md:justify-end p-4">
        <div className="w-full max-w-[600px] bg-gray-700 text-white p-6 flex flex-col gap-6 rounded-xl shadow-lg">
          <Text />
          <hr className="border-t-2 border-gray-500" />
          <Gallery />
          <hr className="border-t-2 border-gray-500" />

        </div>
      </div>
    </div>
  );
};

export default App;
