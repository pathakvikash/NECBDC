import React, { useState } from 'react';

function Comp() {
  // Dummy data for WhosWho items
  const whosWhoItems = [
    {
      id: 1,
      name: 'Shri G. Kishan Reddy',
      position: "Hon'ble Minister - DoNER, GOI",
      imageSrc:
        'https://necbdc.in/public/dist/eCommerceAssets/images/gangapuram-kishan-reddy.jpg',
    },
    {
      id: 2,
      name: 'Shri B. L. Verma',
      position: "Hon'ble Minister of State - DoNER, GOI",
      imageSrc:
        'https://necbdc.in/public/dist/eCommerceAssets/images/bl-verma_1625670106.jpg',
    },
  ];
  const whatsNewItems = [
    {
      id: 1,
      title:
        'Expression of Interest (EOI) for empanelment of local NGOs/Organizations/Agencies for Setting up Bamboo Primary Processing Centre.',
      day: '16',
      month: 'May 2023',
    },
    {
      id: 2,
      title: 'Application for Managing Director, NECBDC',
      day: '14',
      month: 'Apr 2023',
    },
    {
      id: 3,
      title:
        'EOI for empanelment of local NGOs/Organizations/Institutions/Agencies for the project - Promotion of Cane and Bamboo Products Through Market Intelligence and',
      day: '10',
      month: 'Mar 2023',
    },
    {
      id: 2,
      title: 'Application for Managing Director, NECBDC',
      day: '14',
      month: 'Apr 2023',
    },
    {
      id: 3,
      title:
        'EOI for empanelment of local NGOs/Organizations/Institutions/Agencies for the project - Promotion of Cane and Bamboo Products Through Market Intelligence and',
      day: '10',
      month: 'Mar 2023',
    },
  ];

  return (
    <div className='DivCol12 w-[380px] flex-col'>
      <div className='DivWhoswho'>
        {whosWhoItems.map((item) => (
          <div
            className='DivMedia  justify-center items-start gap-[15px] inline-flex'
            key={item.id}
          >
            <img
              alt=''
              className='LinkGangapuramKishanReddyJpg w-[100px] h-[100px]'
              src={item.imageSrc}
            />
            <div className='DivMediaBody self-stretch pt-[42.83px] flex-col justify-start items-start gap-[9.59px] inline-flex'>
              <div className='Heading5LinkShriGKishanReddy text-neutral-700 text-[18px] font-bold leading-snug'>
                {item.name}
              </div>
              <div className='LinkHonBleMinisterDonerGoi text-neutral-400 text-[15px] font-normal leading-snug'>
                {item.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='WhatsNewContainer'>
        <div className='Heading2WhatSNew'>WHAT'S NEW</div>
        <div className='ScrollContainer sectioncar w-min'>
          {whatsNewItems.map((item, index) => (
            <div
              key={index}
              className='flex p-3 flex-col gap-3 justify-center '
            >
              <div className='gap-[21px] py-3 inline-flex' key={item.id}>
                <div className='text-neutral-700 text-[15px] font-bold leading-none'>
                  {item.title}
                </div>
                <div className='DivDate bg-white border border-orange-400 flex-col justify-center items-center inline-flex'>
                  <div className='Heading116  text-center text-neutral-500 text-[22.5px] font-bold leading-snug'>
                    {item.day}
                  </div>
                  <div className=' h-9 pl-[14.58px] pr-[14.38px] pt-[1px] pb-0.5 justify-center items-center inline-flex'>
                    <div className='May2023 w-[28.04px] h-[33px] text-center text-neutral-500 text-[12px] font-normal leading-none'>
                      {item.month}
                    </div>
                  </div>
                </div>
              </div>
              <div className='Separator bg-white border border-white' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Works = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-[#FBD6B6]'>
      <Gallery />
    </div>
  );
};
export default Works;

function GalleryItem({ item }: any) {
  const { active } = item;
  const activeClass = active ? 'bg-orange-400' : '';
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      key={item.id}
      className={`DivCard w-60 h-44 relative bg-white border border-lime-400 flex-col justify-start items-start inline-flex ${
        item.active ? 'bg-orange-400' : ''
      }`}
      onClick={handleClick}
    >
      <img
        className='PromotionJpg w-60 h-24'
        src={item.imageUrl}
        alt={item.title}
      />
      <div className='DivCardBody pl-2 pr-2 flex-col justify-start items-center'>
        <div className='Heading4LinkTraining text-center text-neutral-700 text-xl font-bold leading-relaxed'>
          {item.title}
        </div>
        <div className='Heading6 pl-1 pr-2 pb-4 justify-start items-start'>
          <div className='NecbdcMaintainsATrainingCalendar text-center text-neutral-700 text-sm font-bold leading-none'>
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const galleryItems: any = [
    {
      id: 1,
      title: 'Livelihood',
      description: 'Promoting SustainableLivelihood in North- East India',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/consultancy.jpg',
      active: true,
    },
    // Add more gallery items here
    {
      id: 2,
      title: 'Training',
      description: 'NECBDC maintains a training calendar',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/promotion.jpg',
      active: true,
    },
    {
      id: 3,
      title: 'Skill Development',
      description: 'NECBDC maintains a training calendar',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/training.jpg',
      active: true,
    },
    {
      id: 4,
      title: 'Cluster Development',
      description: 'NECBDC maintains a training calendar',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/network.jpg',
      active: true,
    },
    {
      id: 5,
      title: 'Construction',
      description: 'The concept of bamboo demand is increasing',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/construction.jpg',
      active: true,
    },
    {
      id: 6,
      title: 'Consultancy',
      description: 'NECBDC is available for the expert guidance',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/consultancy_new.jpg',
      active: true,
    },
    {
      id: 7,
      title: 'Marketing',
      description: 'Ideal for product promotion and business development.',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/marketing.jpg',
      active: true,
    },
    {
      id: 8,
      title: 'Promotion',
      description: 'Ideal for product promotion and business development.',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/promotions.jpg',
      active: true,
    },
    {
      id: 9,
      title: 'Networking',
      description: 'As Bamboo Technical Support Groups',
      imageUrl:
        'https://necbdc.in/public/dist/eCommerceAssets/images/networking.jpg',
      active: true,
    },
    // ...
  ];

  return (
    <div className='flex w-[80%] flex-col items-center flex-2 bg-[#FBD6B6]'>
      <div className='ml-0 text-neutral-700 text-3xl font-normal leading-9'>
        WHAT WE DO
      </div>
      <div className='p-4 flex justify-center items-center'>
        <div className='flex gap-8 flex-wrap w-4/5 justify-center'>
          {galleryItems?.map((item: any, index: number) => (
            <div key={index}>
              <GalleryItem item={item} />
            </div>
          ))}
        </div>
        <Comp />
      </div>
    </div>
  );
}
