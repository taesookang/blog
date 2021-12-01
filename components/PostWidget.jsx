import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <Link
          href={`/post/${post.slug}`}
          key={post.title}
          className="cursor-pointer"
        >
          <a className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                height={60}
                width={60}
                className="align-middle rounded-full object-cover"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <span>{post.title}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
