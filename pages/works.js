import React from "react";
import Work from "../components/Work";

const works = () => {
  return (
    <div className="  h-screen p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest ">Works</h2>{" "}
      <Work />
    </div>
  );
};

export default works;
