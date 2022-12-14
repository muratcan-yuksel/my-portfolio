import Image from "next/image";
import React from "react";
import nodejs from "../assets/nodejs.svg";
import bootstrap from "../assets/bootstrap.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import ts from "../assets/ts.svg";
import ethers from "../assets/ethers.svg";
import solidity from "../assets/solidity.svg";
import express from "../assets/express.svg";
import nextjs from "../assets/nextjs.svg";
import nextjs2 from "../assets/nextjs2.png";
import git from "../assets/git.svg";
import hardhat from "../assets/hardhat.svg";
import jest from "../assets/jest.svg";
import mocha from "../assets/mocha.svg";
import mongodb from "../assets/mongodb.svg";
import redux from "../assets/redux.svg";
import sanity from "../assets/sanity.svg";
import sass from "../assets/sass.svg";
import testinglib from "../assets/testinglib.svg";
import vuejs from "../assets/vuejs.svg";

const skillsArr = [
  {
    name: "ES6",
    image: js,
  },
  {
    name: "Typescript",
    image: ts,
  },
  {
    name: "ReactJS",
    image: react,
  },
  {
    name: "VueJS",
    image: vuejs,
  },
  {
    name: "NextJS",
    image: nextjs2,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "NodeJS",
    image: nodejs,
  },
  {
    name: "Express",
    image: express,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "Solidity",
    image: solidity,
  },
  {
    name: "Hardhat",
    image: hardhat,
  },
  {
    name: "EthersJS",
    image: ethers,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    name: "SASS",
    image: sass,
  },
  {
    name: "Jest",
    image: jest,
  },
  {
    name: "Mocha",
    image: mocha,
  },
  {
    name: "Testing Library",
    image: testinglib,
  },
  {
    name: "Sanity CMS",
    image: sanity,
  },
  {
    name: "Git",
    image: git,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap  items-center">
      {skillsArr.map((skill, index) => {
        return (
          <div key={index} className="m-2 flex flex-col items-center">
            <Image src={skill.image} alt="" width={50} height={50} />
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
