import React, { useEffect, useState } from 'react';
import { home, slide2, slide3 } from '../public';
import Image from 'next/image';

const Slider = () => {
  const [slider, setSlider] = useState({
    slide: 0,
    slides: [
      {
        image: home,
        title: 'Azadi Ka Amrit Mahotsav',
        description:
          'It is an initiative of the Government of India to celebrate and commemorate 75 years of independence of progressive India and the glorious history of its people, culture, and achievements',
        link: '#',
      },
      {
        image: slide2,
        title: 'World Bamboo Day',
        description:
          'Every year on September 18, World Bamboo Day is marked as a day of celebration to raise global awareness of bamboo. Bamboo has been an everyday usage wood in areas where it grows naturally, but its use does not seem to be sustainable owing to exploitation',
        link: '#',
      },
      {
        image: slide3,
        title: 'Integrated Bamboo Treatment Plant',
        description:
          'Former Union Minister for DoNER, Dr. Jitendra Singh inaugurating the latest technology Integrated Bamboo Treatment Plant in the premises of North East Cane and Bamboo Development Council (NECBDC) at Burnihat, Guwahati',
        link: '#',
      },
    ],
  });

  const { slide, slides } = slider;

  const handlePrevSlide = () => {
    setSlider((prevSlider) => ({
      ...prevSlider,
      slide: (slide - 1 + slides.length) % slides.length,
    }));
  };

  const handleNextSlide = () => {
    setSlider((prevSlider) => ({
      ...prevSlider,
      slide: (slide + 1) % slides.length,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className='flex w-[80%] items-center justify-center'>
      <div
        id='carouselExampleIndicators'
        className='relative w-full'
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* Carousel indicators */}
        <div
          className='absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0'
          data-te-carousel-indicators
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type='button'
              data-te-target='#carouselExampleIndicators'
              data-te-slide-to={index}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
                index === slide ? 'opacity-100' : 'opacity-50'
              } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
              aria-current={index === slide ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        {/* Carousel items */}
        <div className="  overflow-hidden after:clear-both after:block after:content-['']">
          {slides.map((item, index) => (
            <div
              key={item.title}
              className={`relative float-left -mr-[100%] ${
                index === slide ? '' : 'hidden'
              } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
              data-te-carousel-item
              data-te-carousel-active={index === slide ? '' : undefined}
            >
              <div>
                <Image
                  src={item.image}
                  className='block w-full'
                  alt={item.title}
                />
              </div>
              <div className='px-3 h-[76px] pt-5 pb-[5px] opacity-80 bg-gradient-to-b from-lime-600 to-lime-500 justify-center items-center inline-flex'>
                <div className='w-[1536px] h-[51px] relative flex-col justify-start items-start flex'>
                  <div className='w-[1480.63px] h-[21px] text-center'>
                    <span className='text-orange-500 text-[17px] font-bold leading-relaxed'>
                      {item.title} -
                    </span>
                    <span className='text-white text-[17px] font-normal leading-relaxed'>
                      {item.description}
                    </span>
                  </div>
                  <a
                    href={item.link}
                    className='text-white text-[17px] font-normal leading-relaxed underline'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel controls - prev item */}
        <button
          className='absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none active:text-white active:no-underline active:opacity-90 active:outline-none'
          type='button'
          data-te-target='#carouselExampleIndicators'
          data-te-slide-to={(slide - 1 + slides.length) % slides.length}
          onClick={handlePrevSlide}
          aria-label='Previous slide'
        >
          {'<'}
        </button>
        {/* Carousel controls - next item */}
        <button
          className='absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none active:text-white active:no-underline active:opacity-90 active:outline-none'
          type='button'
          data-te-target='#carouselExampleIndicators'
          data-te-slide-to={(slide + 1) % slides.length}
          onClick={handleNextSlide}
          aria-label='Next slide'
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
