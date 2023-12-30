import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Card = ({ post, onHandleDelete }) => {
  const [viewMode, setViewMode] = useState("toggle");
  const [text, setText] = useState("");

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      onHandleDelete(post);
    }
  };

  const handleUpdate = () => {
    setViewMode("edit");
  };

  const handleView = () => {
    setViewMode("view");
  };

  const handleImage = () => {
    setViewMode("toggle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setViewMode("view");
  };

  return (
    <div className="transform transition duration-300 hover:scale-105">
      <div className="pl-5 pt-5 pr-5 bg-white pb-3 border-2 rounded-md ml-20 mt-10 mb-10">
        {viewMode === "view" && (
          <div>
            <p>{text}</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleUpdate}
            >
              Update Info
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleImage}
            >
              Show Image
            </button>
          </div>
        )}

        {viewMode === "toggle" && (
          <div>
            <div className="flex flex-row justify-end ">
              <Icon
                className="icon"
                icon="ph:x-thin"
                width="20"
                height="20"
                onClick={handleDelete}
              />
            </div>
            <img
              className="h-36 w-50 rounded-md transform transition duration-300 hover:scale-105"
              src={post.download_url}
              alt={`Image`}
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleUpdate}
            >
              Update Info
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleView}
            >
              Show Info
            </button>
          </div>
        )}

        {viewMode === "edit" && (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="put info"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="transform transition duration-300 hover:scale-105"
              />
              <button
                type="submit"
                className="transform transition duration-300 hover:scale-105 ml-2"
              >
                <Icon icon="formkit:submit" width="20" height="20" />
              </button>
            </form>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleImage}
            >
              Show Image
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 transform transition duration-300 hover:scale-105"
              onClick={handleView}
            >
              Show Info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
