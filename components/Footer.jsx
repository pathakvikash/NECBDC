import Image from "next/image";
import { Quick } from "../pages/test";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Social = () => {
  return (
    <div className="w-full py-10 bg-white text-black/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <p className="flex items-center text-sm font-titleFont gap-1">
            {/* <AiOutlineCopyrightCircle className="mt-[1px]" /> */}© COPYRIGHT
            - NECBDC- ALL RIGHTS RESERVED | DISCLAIMER | WEBSITE POLICIES THE
            SITE IS DESIGNED BY ESYMMETRY VENTURES | WEBSITE CONTENT MANAGED &
            UPDATED BY NECBDC
          </p>
        </div>

        <div className="flex gap-6">
          <BsFacebook className="w-6 h-6 hover:text-[green] duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6  hover:text-[green] duration-300 cursor-pointer" />
          <BsYoutube className="w-6 h-6  hover:text-[green] duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  // Dummy data
  const importantLinks = [
    "Home",
    "About Us",
    "North East India",
    "Advertisements",
    "Notices",
    "FAQs",
    "Contact Us",
  ];
  const socialMediaIcons = [
    "https://via.placeholder.com/32x32",
    "https://via.placeholder.com/32x32",
    "https://via.placeholder.com/32x32",
  ];
  const quickLinks = [
    ,
    "india.gov.in",
    "MDoNER",
    "NEC",
    "NBM",
    "Invest India",
    "Make In India",
    "Skill India",
    "Swachh Bharat",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <Quick />

      <div className="w-full py-5 bg-orange-400 text-white text-sm ">

      <div className="flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-around items-center lg:items-start">
          <div className="text-center lg:text-left">
            <div className="font-bold mb-2">WEB INFO MANAGER</div>
            <div>Shri Tamreiyo Longvah</div>
            <div>Deputy Manager (Admin)</div>
            <div>North East Cane and Bamboo Development Council (NECBDC)</div>
            <div>G.S. Road, Burnihat, Guwahati, Assam 793101, India</div>
            <div>cbtcassam[at]gmail[dot]com</div>
            <div className="w-[165.53px] h-[27px] text-white text-[24px] font-bold leading-7 mt-4">NEWSLETTER</div>
            <div className="flex mt-2">
              <input
                className="h-8 px-2 bg-orange-200 border border-white text-gray-500 text-xs font-normal"
                type="email"
                placeholder="Enter email"
              />
              <button
                className="h-8 px-3 bg-orange-200 border border-white text-white text-xs font-medium"
                type="submit"
              >
                <img src={'https://necbdc.in/public/dist/eCommerceAssets/images/newsletter.png'} alt="logo" />
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="font-bold mb-1">Important Links</div>
            {importantLinks.map((link) => (
              <div key={link} className="mb-1">
                {link}
              </div>
            ))}
          </div>
          <div>
            <div className="font-bold">QuickLinks</div>
            {quickLinks.map((link) => (
              <div key={link} className="mb-1">
                {link}
              </div>
            ))}
          </div>
          <img
            className="w-[350px] h-[202px] bg-white"
            src={
              "https://necbdc.in/public/dist/eCommerceAssets/images/akam.png"
            }
            alt="ooter"
          />
        </div>
        </div>

      </div>
      <Social />
    </div>
  );
};

export default Footer;
