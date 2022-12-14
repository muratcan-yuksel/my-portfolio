import React from "react";
import Work from "../components/Work";
import binance from "../assets/binanceClone.png";
import mathimals from "../assets/Mathimals.png";
import wagmi from "../assets/wagmiSS.png";

const projects = [
  {
    title: "Wagmi Wallet Connect",
    description:
      "The user can connect to the dApp with different wallets and make transaction. The article I wrote explaining the build process was found by Alchemy, they ended up sending me some cool gifts for mentioning them in it",
    image: wagmi,
    demo: "https://muratcan-yuksel.github.io/wagmi-front3/",
    github: "https://github.com/muratcan-yuksel/wagmi-post",
    article:
      "https://dev.to/muratcanyuksel/connecting-to-different-web3-wallets-using-wagmish-and-reactjs-1ojp",
  },
  {
    title: "Binance Clone with Websockets",
    description:
      "This app provides the user with realtime btc/usd exchange rates.",
    image: binance,
    demo: "https://muratcan-yuksel.github.io/skyneb-app/",
    github: "https://github.com/muratcan-yuksel/skyneb-app",
    article: "https://dev.to/muratcanyuksel/using-websockets-with-react-50pi",
  },
  {
    title: "Mathimals- A Children's Game",
    description: "A game for children to practice their spelling skills.",
    image: mathimals,
    demo: "https://muratcan-yuksel.github.io/Mathimals/",
    github: "https://github.com/muratcan-yuksel/Mathimals",
  },
];

const works = () => {
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Works
      </h2>{" "}
      <div className="flex flex-wrap justify-center">
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
    </div>
  );
};

export default works;
