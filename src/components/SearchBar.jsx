import React from "react";

export default function SearchBar({ bg }) {
  return (
    <div>
      <div className="grid grid-cols-3 xl:h-24 border-2 border-primary rounded-xl p-1">
        <input
          className=" text-center  text-primary py-3 bg-transparent border-r border-dark"
          type="text"
          placeholder="Industry"
        />
        <input
          className="text-center text-primary py-3 bg-transparent border-r border-dark"
          type="text"
          placeholder="Location"
        />
        <input
          className=" text-center text-primary py-3 bg-transparent "
          type="text"
          placeholder="Keyword"
        />
      </div>
      <button
        style={{ backgroundColor: bg }}
        className={`float-right mt-4 px-4 py-2 rounded-lg text-white`}
      >
        Search
      </button>
    </div>
  );
}