import Image from 'next/image';
import Link from 'next/link';
import logoDark from '../public/images/logoDark.png';
import React from 'react';
import logo from '../public/images/logo.svg';

import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const handlePageClick = (path: any) => {
    router.push(path).catch((error) => {
      // Handle error here (e.g., redirect to error page)
      console.error('Error navigating to page:', error);
    });
  };

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'North East India', path: '/ne-india' },
    { name: 'NER States', path: '/ner-states' },
    { name: 'Notices', path: '/notices' },
    { name: 'Documents', path: '/documents' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <>
      <div className=' justify-start items-start gap-[15px] inline-flex'>
        {/* Top */}
        <div className='pl-[15px] pr-[424.58px] pb-2.5 justify-start items-start gap-[15px] inline-flex'>
          <Image alt='' src={logo} />
          <div className='h-auto relative flex-col justify-start items-start flex'>
            <div className='h-[34px] text-red-700 text-[28.5px] font-black leading-9'>
              North East Cane and Bamboo Development Council
            </div>
            <div className='h-[18px] text-red-700 text-[15px] font-bold leading-snug'>
              ( NECBDC )
            </div>
            <div className='h-[22px] text-black text-[18px] font-medium leading-tight'>
              Under North Eastern Council, Ministry of DoNER, Government of
              India
            </div>
            <div className='h-[18px] text-stone-500 text-[15px] font-normal leading-snug'>
              Guwahati, Assam, India | An ISO 9001:2015 Certified Organization
            </div>
          </div>
        </div>
        <div className='self-stretch pt-[7.50px] flex-col justify-end items-start inline-flex'>
          <div className='self-stretch h-[33px] pl-[158.64px] pr-[7.30px] pb-[15px] justify-end items-start inline-flex'>
            <div className='pr-[7.30px] pt-[1px] pb-0.5 justify-start items-center inline-flex'>
              <div className='h-[15px] text-right text-neutral-700 text-[12px] font-normal leading-none'>
                Citizen's Charter |
              </div>
            </div>
            <div className='pr-[7.13px] pt-[1px] pb-0.5 justify-start items-center inline-flex'>
              <div className='h-[15px] text-right text-neutral-700 text-[12px] font-normal leading-none'>
                FAQ |
              </div>
            </div>
            <div className='h-[15px] text-right text-neutral-700 text-[12px] font-normal leading-none'>
              Contact Us
            </div>
          </div>
          <div className='self-stretch h-[46.50px] pl-[1.50px] pr-[107.09px] pb-[15px] justify-start items-start inline-flex'>
            <div className='pl-[11.25px] pr-[23.25px] py-[6.75px] bg-white border border-stone-300 justify-start items-center inline-flex'>
              <div className='self-stretch pr-[59.92px] justify-start items-center inline-flex'>
                <div className='h-[15px] text-gray-500 text-[12px] font-normal'>
                  Search- keyword, phrase
                </div>
              </div>
            </div>
            <div className='self-stretch pl-[7.50px] pr-[9px] pt-[10.20px] pb-[6.30px] bg-orange-400 border border-stone-300 justify-center items-center inline-flex'>
              <img
                className='h-[15px]'
                alt=''
                src='https://via.placeholder.com/15x15'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-full h-[42.50px] relative bg-neutral-700'>
          {/* Nav */}
          <div className='left-[33.48px] top-0 absolute justify-start items-start inline-flex'>
            {pages.map((page) => (
              <div
                key={page.path}
                className={`pl-[15px] pr-[15.13px] pt-[6.50px] pb-[13px] border-b-2 ${
                  router.pathname === page.path
                    ? 'border-orange-400'
                    : 'border-transparent'
                } justify-start items-start flex`}
                onClick={() => handlePageClick(page.path)}
              >
                <div
                  className={`text-[15px] font-bold leading-snug ${
                    router.pathname === page.path
                      ? 'text-orange-400'
                      : 'text-zinc-200'
                  }`}
                >
                  {page.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
