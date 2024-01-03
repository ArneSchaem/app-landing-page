import Link from "next/link";
import React from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mx-auto relative max-w-[1170px]">
<div className=" md:mt-[1.6rem] sm:mt-[1.6rem] lg:mt-[2.19rem] h-[1.5] max-w-[1170px] hidden sm:flex">
        <div className="flex  border-green-600 gap-[48px]">
          <div className="flex w-[183.94px] h-[1.5]  gap-[18px]">
            <div className=" justify-center items-center inline-flex ">
              <FaEnvelope size={18} color="#FFF" />
            </div>
            <div className="w-[147.76px] text-white text-base font-normal leading-normal">
              Info@youremail.com
            </div>
          </div>
          <div className="flex w-[183.94px] h-[1.5] gap-[18px]">
            <div className=" justify-center items-center inline-flex">
              <FaPhoneAlt size={18} color="#FFF" />
            </div>
            <div className="w-[147.76px] text-white text-base font-normal leading-normal">
              (480) 555-0103
            </div>
          </div>
        </div>
        <div className="ml-auto  w-[162px] gap-[30px]  justify-center items-center inline-flex ">
          <FaFacebookF size={18} color="#FFF" />
          <FaInstagram size={18} color="#FFF" />
          <FaTwitter size={18} color="#FFF" />
          <FaYoutube size={18} color="#FFF" />
        </div>
      </div>

      <div className="mt-8 mr-4 max-w-[1170px] ml-4 md:mt-[2.19rem] max-container lg:mt-[0.92rem] ">
        <div className="  h-[2.5rem] md:h-[3.75rem] bg-white lg:rounded-[5px] rounded-[3px]  shadow w-auto flex flex-row items-center justify-between flex-shrink-0   ">
          <div className="lg:hidden ml-[0.56rem] ">
            <Link href="">
              <Image
                src="/images/Group.png"
                alt="logo"
                width={24}
                height={24}
                className=""
              ></Image>
            </Link>
          </div>

          <div className="text-gray-800 ml-10 text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
            <ul className="hidden h-full gap-12 lg:flex">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/blog/hello-world">FEATURES</Link>
              </li>
            </ul>
          </div>

          <div className="box-border flex-shrink-0 ">
            <div className="flex items-center justify-center w-[6.25rem] h-[3.75rem] md:w-[12.5rem] md:h-[5.625rem]  bg-white rounded-[5px] shadow">
              <div className="w-[70px] h-[12px] md  md:w-[10.5rem] md:h-[1.75rem]">
                <Link href="/">
                  <Image
                    src="/images/appolly-logo2.png"
                    alt="logo"
                    width={333}
                    height={56}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-xl font-semibold font-['Josefin Sans'] uppercase leading-[30px]">
            <ul className="hidden h-full gap-12 lg:flex">
              <li>
                <Link href="/">SCREENSHOT</Link>
              </li>
              <li>
                <Link href="/about">BLOG</Link>
              </li>
            </ul>
          </div>

          <div className=" mr-[0.19rem]  md:mr-[0.31rem] ">
            <Link href="/">
              <DownloadButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
