import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import darkTheme from "../assets/darktheme.png";
import reduxArticle from "../assets/reduxarticle.webp";
import websocketsarticle from "../assets/websocketsarticle.webp";
import sidebararticle from "../assets/sidebararticle.jpg";
import axios from "axios";

const articles = [
  {
    title: "Dark Theme with TailwindCSS",
    social_image: darkTheme,
    canonical_url:
      "https://blog.logrocket.com/react-light-dark-mode-css-theme-ui/",
  },
  {
    title: "Create smooth sidebars with react-pro-sidebar and MUI",
    social_image: sidebararticle,
    canonical_url:
      "https://blog.logrocket.com/create-sidebar-react-pro-sidebar-mui/",
  },
  // {
  //   title:
  //     "Gestion globale de l'état dans React.js avec redux-toolkit (un guide pratique)",
  //   image: reduxArticle,
  //   link: "https://dev.to/muratcanyuksel/gestion-globale-de-l-etat-dans-react-js-avec-redux-toolkit-un-guide-pratique-2276",
  // },
  // {
  //   title: "Using WebSockets with React",
  //   image: websocketsarticle,
  //   link: "https://dev.to/muratcanyuksel/using-websockets-with-react-50pi",
  // },
];

//had to change the name to uppercase so that useStat would work
const Posts = () => {
  const [devtoArticles, setDevtoArticles] = useState(null);
  const [page, setPage] = useState(0);

  async function getDevtoArticles() {
    try {
      const res = await axios.get(
        `  https://dev.to/api/articles?username=muratcanyuksel
`
      );
      articles.push(...res.data);
      setDevtoArticles(articles.slice(0, 26));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDevtoArticles();
    console.log(devtoArticles);
  }, []);

  const previousButton = () => {
    if (page <= 5) {
      setPage(0);
      return;
    }
    setPage(page - 7);
  };

  const nextButton = () => {
    if (page >= devtoArticles.length - 5) {
      setPage(0);
      return;
    }
    setPage(page + 7);
  };

  if (!devtoArticles) {
    return <div>Loading...</div>;
  }
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Popular Posts
      </h2>{" "}
      {console.log(devtoArticles)}
      <div className="flex flex-wrap justify-center ">
        {devtoArticles.slice(page, page + 6).map((item, index) => {
          return (
            <Link
              className="m-5 w-full md:w-2/5"
              key={index}
              href={item.canonical_url}
              target="_blank"
            >
              <Image
                width={500}
                height={300}
                className=""
                alt=""
                src={item.social_image}
              ></Image>
              <h4 className="mt-5">{item.title}</h4>
            </Link>
          );
        })}
      </div>
      <div className="buttons flex flex-row justify-between ">
        <button onClick={previousButton} className="heroButton">
          Previous
        </button>
        <button onClick={nextButton} className="heroButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
