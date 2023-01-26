import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Videos = () => {
  const [videos, setVideos] = useState(null);

  async function getVideos() {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      );
      setVideos(res.data.items);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-screen md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Video Tutorials
      </h2>{" "}
      {videos &&
        videos.slice(0, -1).map((video, index) => (
          <div className="flex flex-wrap justify-center " key={index}>
            <div className="flex flex-col justify-center items-center">
              {" "}
              {/* <a href={`https://youtube.com/watch?v=${video.id.videoId}`}>
                Watch on YouTube
            </a> */}
              <br />
              <iframe
                width="500"
                height="500"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{video.snippet.title}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Videos;