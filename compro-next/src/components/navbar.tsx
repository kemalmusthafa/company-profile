import Link from "next/link";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="flex navbar shadow-md fixed z-50 w-full bg-white dark:bg-black md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="text-xl font-extrabold">
          MSTH.
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href={"/product"}>Product</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4 mr-4">
        <Link href="/search" aria-label="Search">
          <IoMdSearch size={20} />
        </Link>
        <Link href="/cart" aria-label="Cart">
          <IoBagHandleOutline size={20} />
        </Link>
        <Link href="/language" aria-label="Language">
          <TbWorld size={20} />
        </Link>
        <Link href="/profile" aria-label="Profile">
          <IoPersonOutline size={20} />
        </Link>
      </div>
    </div>
  );
}
