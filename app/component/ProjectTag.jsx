import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "bg-primary-500 text-white"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2  border-primary-500 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
