import React from "react";

const BioItem = ({ date, content, location, index }) => {
  return (
    <div className="flex flex-row my-2 items-center flex-wrap">
      {/* date */}
      <div className="font-bold">{date}</div>
      {/* content  */}
      {/* if index is 0, then it is the first item, so we want to underline it */}
      {index === 0 ? (
        <div className="ml-4 font-bold underline underline-offset-4 text-lg">
          {content}
        </div>
      ) : (
        <div className="ml-4">{content}</div>
      )}
      {/* location */}
      <div className="ml-4 underline underline-offset-2">{location}</div>
    </div>
  );
};

export default BioItem;
