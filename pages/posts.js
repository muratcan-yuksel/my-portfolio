import Image from "next/image";
import Link from "next/link";
import React from "react";
import darkTheme from "../assets/darktheme.png";
import reduxArticle from "../assets/reduxarticle.webp";
import websocketsarticle from "../assets/websocketsarticle.webp";
import sidebararticle from "../assets/sidebararticle.jpg";

const articles = [
  {
    title: "Dark Theme with TailwindCSS",
    image: darkTheme,
    link: "https://blog.logrocket.com/react-light-dark-mode-css-theme-ui/",
  },
  {
    title: "Create smooth sidebars with react-pro-sidebar and MUI",
    image: sidebararticle,
    link: "https://blog.logrocket.com/create-sidebar-react-pro-sidebar-mui/",
  },
  {
    title:
      "Gestion globale de l'état dans React.js avec redux-toolkit (un guide pratique)",
    image: reduxArticle,
    link: "https://dev.to/muratcanyuksel/gestion-globale-de-l-etat-dans-react-js-avec-redux-toolkit-un-guide-pratique-2276",
  },
  {
    title: "Using WebSockets with React",
    image: websocketsarticle,
    link: "https://dev.to/muratcanyuksel/using-websockets-with-react-50pi",
  },
];

const posts = () => {
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Popular Posts
      </h2>{" "}
      <div className="flex flex-wrap justify-center ">
        {articles.map((item, index) => {
          return (
            <Link
              className="m-5 w-full md:w-2/5"
              key={index}
              href={item.link}
              target="_blank"
            >
              <Image className="" alt="" src={item.image}></Image>
              <h4 className="mt-5">{item.title}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default posts;
