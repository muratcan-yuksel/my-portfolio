import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import Image from "next/image";
import ppImg from "../assets/pp.jpg";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name is Murat Can Yüksel",
      "Guy who develops web3 applications",
      "Full stack web2 applications ",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      style={{ height: "60vh" }}
      className=" bg-[#202023]  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src={ppImg}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full-stack Web3 Developer
        </h2>
        <div className="">
          <h1 className="text-xl lg:text-4xl font-semibold px-10">
            <span className="mr-3 text-white"> {text} </span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="/about">
              <button className="heroButton">About </button>
            </Link>
            <Link href="/#experience">
              <button className="heroButton">Experience </button>
            </Link>
            <Link href="/#skills">
              <button className="heroButton">Skills </button>
            </Link>
            <Link href="/#projects">
              <button className="heroButton">Projects </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
