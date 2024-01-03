import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-auto h-auto bg-[#232233] p-[1rem]">
      <div className="max-w-[1170px] h-[310px] mx-auto sm:h-[150px] justify-center items-center flex flex-col sm:flex-row  bg-white rounded-[10px]">
        <div className="flex items-center justify-center w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-indigo-600 flex-shrink-0 rounded-full">
          <FaEnvelope size={20} className="sm:size-[24px]"  color="#fff" />
        </div>
        <div className="text-gray-800 sm:mt-[0px] mt-[30px] text-xl font-semibold uppercase leading-[30px]">
          info.design@gmail.com
        </div>
        <div className="w-[117px] sm:rotate-90 sm:mt-[0px] mt-[20px] flex-shrink-0 h-[0px] border-2 border-gray-800"></div>
        <div className="flex items-center justify-center sm:mt-[0px] mt-[30px]  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-indigo-600  flex-shrink-0 rounded-full">
          <FaPhoneAlt size={20} color="#fff" />
        </div>
        <div className="  text-gray-800 text-xl sm:mt-[0px] mt-[20px]  font-semibold ">
          +880 321 655 9985
        </div>
      </div>

      <div className="flex  flex-col h-[11.42rem] w-[20.8rem] ">
        <div className=" flex text-[1.95rem] text-white font-bold ">LOGO</div>
        <div className="flex w-auto text-white h-[4.5rem] text-1 font-bold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </div>
        <div className="flex w-[17.25rem] h-[1.5rem] gap-[30px] mt-[2.37rem]">
          <FaFacebookF size={24} color="#5956E9" />
          <div className="w-[0.0625rem] h-[1.25rem] bg-white"></div>
          <FaInstagram size={24} color="#fff" />
          <div className="w-[0.0625rem] h-[1.25rem] bg-white"></div>
          <FaTwitter size={24} color="#fff" />
          <div className="w-[0.0625rem] h-[1.25rem] bg-white"></div>
          <FaYoutube size={24} color="#fff" />
        </div>
      </div>

      <div className="flex flex-col h-[11.5rem] w-[10rem] mt-[3.75rem] gap-[0.69rem] ml-">
        <div className="text-white text-[1.5rem] font-semibold   ">
          QUICK LINK
        </div>

        <div className="text-white text-base font-normal leading-normal">
          About
        </div>
        <div className="text-white text-base font-normal leading-normal">
          Features
        </div>

        <div className="text-white text-base font-normal leading-normal">
          Screenshot
        </div>

        <div className="text-white text-base font-normal leading-normal">
          Blog
        </div>
      </div>

      <div className="flex flex-col h-[11.5rem] w-[21.4rem] mt-[3.75rem] ">
        <div className="text-white text-[25px] font-semibold ">NEWS LETTER</div>

        <div className="text-white text-base font-normal  leading-normal">
          Subscribe our newsletter to get our latest update & news
        </div>
        <div className="w-auto h-auto ">
          <div className="w-[343px] h-[50px] bg-white rounded flex items-center">
            <div className="w-[139px] text-neutral-500 text-base font-normal   leading-normal">
              Your email address
            </div>
            <div className="flex items-center justify-center w-[48.34px] h-[46px] bg-indigo-600 rounded">
              <FaPaperPlane size={24} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto h-[0px] border border-white"></div>
      <div className="flex justify-center items-center text-center">
        <FaRegCopyright color="#fff" />

        <div className=" flex w-auto text-center text-white text-[12.80px] font-light ">
          Copyright 2021 .Ojjomedia. All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
