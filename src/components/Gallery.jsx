import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaQuestionCircle } from "react-icons/fa";

const Gallery = () => {
  const [imageList, setImageList] = useState([]);
  const fileInputRef = useRef(null);

  const addImg = (event) => {
    const newFile = event.target.files[0];
    const newImageURL = URL.createObjectURL(newFile);
    setImageList((prevList) => [...prevList, newImageURL]);
  };

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full max-w-md bg-gray-600 p-5 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <FaQuestionCircle className="text-gray-300 hover:text-white text-xl cursor-pointer bg-gray-600 rounded-full mb-4 sm:mb-0 sm:mr-4" />
        <button className="text-white hover:bg-gray-700 bg-black px-4 py-2 rounded-md mb-4 sm:mb-0">
          Gallery
        </button>
        <div className="flex items-center ml-auto space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={addImg}
          />
          <button
            onClick={handleAddImageClick}
            className="bg-gray-500 text-white px-4 py-2 rounded-3xl shadow hover:bg-gray-400 hover:shadow-lg transition-all duration-300 flex items-center"
          >
            + Add Image
          </button>
          <div className="flex space-x-2">
            <button className="text-gray-300 hover:text-white p-2">
              <FaArrowLeft className="text-xl sm:text-2xl bg-gray-700 rounded-full" />
            </button>
            <button className="text-gray-300 hover:text-white p-2">
              <FaArrowRight className="text-xl sm:text-2xl bg-gray-700 rounded-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`image${index + 1}`}
              className="w-full h-full object-cover border border-gray-500 shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
