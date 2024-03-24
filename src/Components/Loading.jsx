import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
const Loading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
