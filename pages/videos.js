import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { setupCache } from "axios-cache-adapter";
const Videos = () => {
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Create `axios-cache-adapter` instance
  const cache = setupCache({
    maxAge: 15 * 60 * 1000,
  });

  // Create `axios` instance passing the newly created `cache.adapter`
  const api = axios.create({
    adapter: cache.adapter,
  });

  async function getVideos() {
    try {
      setIsLoading(true);
      const res = await api.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      );
      setVideos(res.data.items);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="h-full p-2 border rounded-xl border-[#313131] px-5 w-screen md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Video Tutorials
      </h2>{" "}
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-wrap justify-evenly">
        {videos &&
          videos.slice(0, -1).map((video, index) => (
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
    </div>
  );
};

export default Videos;
