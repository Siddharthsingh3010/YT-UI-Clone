import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

const Feed = () => {
  return (
    <div className=" mt-[65px] ml-[227px] w-[85%] relative overflow-x-hidden">
      <div className=" ml-[2px]">
        <ButtonList />
      </div>
      <div className=" mt-[-20px]">
        <Videos />
      </div>


    </div>
  );
};

export default Feed;
