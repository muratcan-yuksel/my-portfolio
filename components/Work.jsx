import React from "react";
import binance from "../assets/binanceClone.png";
import mathimals from "../assets/Mathimals.png";
import wagmi from "../assets/wagmiSS.png";
import Image from "next/image";
import Link from "next/link";

const Work = ({ title, description, image, demo, github, article }) => {
  return (
    <div>
      <Image alt="" src={image}></Image>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={demo}>
        <button className="heroButton">Demo</button>
      </Link>{" "}
      <Link href={github}>
        <button className="heroButton">Source Code</button>
      </Link>{" "}
      {article ? (
        <Link href={article}>
          <button className="heroButton">Relevant Article</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Work;
