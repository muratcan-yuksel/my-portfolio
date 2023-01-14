import React from "react";
import binance from "../assets/binanceClone.png";
import mathimals from "../assets/Mathimals.png";
import wagmi from "../assets/wagmiSS.png";
import Image from "next/image";
import Link from "next/link";

const Work = ({ title, description, image, live, github, article }) => {
  return (
    <div className="h-2/5 w-full md:w-2/5 flex flex-col items-center mx-5">
      <Image alt="" src={image}></Image>
      <h2 className="font-bold my-2">{title}</h2>
      <p className="text-sm leading-6">{description}</p>
      <div className="flex my-2">
        <Link target="_blank" href={live}>
          <button className="heroButton">Live</button>
        </Link>{" "}
        <Link target="_blank" href={github}>
          <button className="heroButton">Code</button>
        </Link>{" "}
        {article ? (
          <Link target="_blank" href={article}>
            <button className="heroButton">Article</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
