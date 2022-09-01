/* eslint-disable react/display-name */
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
// import FlipMove from "react-flip-move";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
          `${BASE_URL}${result?.backdrop_path}`
        }
        alt="hhhhh"
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div>
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-white text-2xl mt-1 transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .{" "}
          <FiThumbsUp className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
