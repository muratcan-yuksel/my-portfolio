import React from "react";
import Work from "../components/Work";
import binance from "../assets/binanceClone.png";
import mathimals from "../assets/Mathimals.png";
import wagmi from "../assets/wagmiSS.png";

const projects = [
  {
    title: "Wagmi",
    description:
      "Wagmi is a social media app for dog lovers. It's a full-stack app with a React Native front-end and a NodeJS back-end. I've used MongoDB for the database and deployed the app on Heroku. I've also used Firebase for the authentication and storage.",
    image: wagmi,
    demo: "https://wagmi.netlify.app/",
    github: "",
    article: "asd",
  },
];

const works = () => {
  return (
    <div className="  h-screen p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest ">Works</h2>{" "}
      {projects.map((item, index) => {
        return (
          <Work
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            demo={item.demo}
            github={item.github}
            article={item.article}
          />
        );
      })}
    </div>
  );
};

export default works;
