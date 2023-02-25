import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { setupCache } from "axios-cache-adapter";
import usePagination from "../utils/userPagination";

const Videos = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    totalPageNumber,
    currentPage,
    getItemsForPage,
    handleNextPage,
    handlePreviousPage,
    getPageNumber,
  } = usePagination(items);

  // Create `axios-cache-adapter` instance
  const cache = setupCache({
    maxAge: 15 * 60 * 1000,
  });

  // Create `axios` instance passing the newly created `cache.adapter`
  const api = axios.create({
    adapter: cache.adapter,
  });

  async function getItems() {
    try {
      setIsLoading(true);
      const res = await api.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      );
      setItems(res.data.items);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="h-full p-2 border rounded-xl border-[#313131] px-5 w-screen md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Video Tutorials - {currentPage + 1} /{totalPageNumber}
      </h2>{" "}
      <div className="buttons flex flex-row justify-between ">
        <button onClick={handlePreviousPage} className="heroButton">
          Previous
        </button>
        <button onClick={handleNextPage} className="heroButton">
          Next
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-wrap justify-evenly">
        {items &&
          getItemsForPage()
            .slice(0, -1)
            .map((video, index) => (
              <div className=" m-4 " key={index}>
                <div className="flex flex-col  justify-center items-center">
                  <iframe
                    width="250"
                    height="250"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h3 style={{ height: "auto", width: "250px" }}>
                    {video.snippet.title}
                  </h3>
                </div>
              </div>
            ))}
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

export default Videos;
