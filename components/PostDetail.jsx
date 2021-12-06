import React from "react";
import Image from "next/image";
import moment from "moment";

import { RichText } from '@graphcms/rich-text-react-renderer'; 

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="block mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={200}
          height={120}
          layout="responsive"
          objectPosition="top"
          className="rounded-t-lg lg:rounded-lg shadow-md"
          priority={true}
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height={30}
              width={30}
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {/* {console.log(post.content.raw)} */}
        <RichText 
        content={post.content.raw}
        renderers={{
          a: ({ children, href} ) => <a href={href} target="_blank" rel="noreferrer" className=" text-pink-600"> {children}</a>,
          h3: ({children}) => <b className=" text-lg">{children}</b>,
          p: ({children}) => <p className="mb-4">{children}</p>,
          code: ({children}) => <span className="bg-gray-200 text-gray-800 px-2 rounded-sm">{children}</span>
        }}
        />
      </div>
    </div>
  );
};

export default PostDetail;

