"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* All Content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-Integral.CF font-extrabold">SHOP.CO</h1>
          </Link>

          {/* Links - Animated Sliding Nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
            onClick={closeMenu}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 text-sm md:text-base items-center">
              <li className="hover:underline underline-offset-2">
                <Link href="/" className="flex items-center space-x-1">
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="/contact">On Sale</Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="/about">New Arrivals</Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="/signup">Brands</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex w-96 max-w-[2000px] bg-gray-200 rounded-full items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
            <input
              className="w-full p-1 rounded-full bg-gray-200 outline-none"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </div>

          {/* Icons */}
          <div className="flex gap-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="text-black block md:hidden text-3xl z-50"
            onClick={toggle}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </main>
  );
}

export default Header;
