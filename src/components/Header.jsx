'use client'
import { faListCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="py-[15px]  shadow-xl">
      <div className="xl:container mx-auto flex justify-between items-center">
        <div className="logo content-center">
          <Link href="/">
            <Image src="/images/logo.svg" width="150" height="60" alt="IINTERSPORT" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <input type="text" placeholder="Search for products" className="rounded-l p-2 border border-primaryColor" />
            <button className="bg-primaryColor text-white rounded-r p-2">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="content-center ml-[20px]">
            <svg
              className="w-8 h-8 text-primaryColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          </div>
          <div className="content-center ml-[20px]">
            <FontAwesomeIcon icon={faListCheck} className="text-primaryColor text-2xl" />
          </div>
          <div className="content-center ml-[20px] " onClick={() => {
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            window.location.href = '/login';
          }}>
            <FontAwesomeIcon icon={faSignOutAlt} className="text-primaryColor text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
