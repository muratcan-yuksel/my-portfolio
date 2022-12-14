import React from "react";
import binance from "../assets/binanceClone.png";
import mathimals from "../assets/Mathimals.png";
import wagmi from "../assets/wagmiSS.png";
import Image from "next/image";
import Link from "next/link";

const Work = ({ title, description, image, demo, github, article }) => {
  return (
    <div
      style={{ width: "40%" }}
      className="h-2/5 flex flex-col items-center mx-5"
    >
      <Image alt="" src={image}></Image>
      <h2 className="font-bold my-2">{title}</h2>
      <p className="text-sm leading-6">{description}</p>
      <div className="flex my-2">
        <Link target="_blank" href={demo}>
          <button className="heroButton">Demo</button>
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
