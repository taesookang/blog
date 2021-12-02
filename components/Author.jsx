import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-10">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
        <h3 className="text-gray-600 my-4 text-xl font-bold">{author.name}</h3>
        <p className="text-gray-600 text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
