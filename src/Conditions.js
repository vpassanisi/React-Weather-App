import React from "react";

const Conditions = props => {
  return (
    <div className="text-black mt-2 text-2xl">
      <div>
        {props.conditions}
        <img
          className="bg-blue-gray-900-alpha-70 rounded-md inline ml-2 p-2"
          src={`${props.icon}?apiKey=FbkF7HBS4x03_o9G-VTicFHdCF1UrskFVGRd_OwZOmw`}
          alt=":("
        />
      </div>
    </div>
  );
};

export default Conditions;
