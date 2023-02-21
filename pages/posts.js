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

//had to change the name to uppercase so that useState would work
const Posts = () => {
  const [posts, setPosts] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  async function getPosts() {
    try {
      const res = await axios.get(
        `  https://dev.to/api/articles?username=muratcanyuksel
`
      );
      articles.push(...res.data);
      setPosts(articles);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const getItemsForPage = () => {
    const startIndex = currentPage * 6;
    const endIndex = startIndex + 6;
    return posts.slice(startIndex, endIndex);
  };
  const handleNextPage = () => {
    if (currentPage === Math.ceil(posts.length / 6) - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  };

  const handlePreviousPage = () => {
    if (currentPage === 0) {
      setCurrentPage(Math.ceil(posts.length / 6) - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  };

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Popular Posts
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
