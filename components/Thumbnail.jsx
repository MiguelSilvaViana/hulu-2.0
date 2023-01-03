import Image from 'next/image';
import React from 'react';
import { HiOutlineThumbUp } from 'react-icons/hi';
import { forwardRef } from 'react';

const Thumbnail = forwardRef((result, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${
            result.result.backdrop_path || result.result.poster_patch
          }` || `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
        alt="thumbnail"
      />
      <div className="p-2">
        <p className="max-w-md truncate">{result.result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.result.title || result.result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.result.media_type && `${result.result.media_type} .`}{' '}
          {result.result.relase_date || result.result.first_air_date} .{' '}
          <HiOutlineThumbUp className="h-5 mx-2" /> {result.result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
