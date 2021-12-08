import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])

  return (
    <div className="container mx-auto px-8 mb-8">
      <div className=" border-b w-full inline-block border-white py-8">
        <div className="md:float-left block">
          <Link href="/">
            <a>
              <Image src="/logo.svg" width={160} height={60} alt="logo" className="drop-shadow-md" />
            </a>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer hover:text-pink-600 transition duration-500 ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
