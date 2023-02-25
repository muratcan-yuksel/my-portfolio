import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import darkTheme from "../assets/darktheme.png";
import reduxArticle from "../assets/reduxarticle.webp";
import websocketsarticle from "../assets/websocketsarticle.webp";
import sidebararticle from "../assets/sidebararticle.jpg";
import axios from "axios";
import usePagination from "../utils/userPagination";

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

//had to change the name to uppercase so that useState would work
const Posts = () => {
  const [posts, setPosts] = useState(null);

  const {
    totalPageNumber,
    currentPage,
    getItemsForPage,
    handleNextPage,
    handlePreviousPage,
    getPageNumber,
  } = usePagination(posts);

  async function getPosts() {
    try {
      const res = await axios.get(
        `  https://dev.to/api/articles?username=muratcanyuksel
`
      );
      setPosts([...articles, ...res.data]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (posts) {
      getPageNumber();
    }
  }, [posts]);

  // call getPosts when the component mounts
  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Popular Posts - {currentPage} /{totalPageNumber}
      </h2>{" "}
      <div className="buttons flex flex-row justify-between ">
        <button onClick={handlePreviousPage} className="heroButton">
          Previous
        </button>
        <button onClick={handleNextPage} className="heroButton">
          Next
        </button>
      </div>
      {console.log(posts)}
      <div className="flex flex-wrap justify-center ">
        {getItemsForPage().map((item, index) => {
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
        <button onClick={handlePreviousPage} className="heroButton">
          Previous
        </button>
        <button onClick={handleNextPage} className="heroButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
