import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';

import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState('');

  const handlePageClick = (path: string) => {
    if (path === '') {
      return;
    } else {
      setSelectedPage(path);
      router.push(path).catch((error) => {
        console.error('Error navigating to page:', error);
      });
    }
  };

  const pages = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      subOptions: [
        'About NECBDC',
        'What we do',
        'Mission and Vision',
        'Projects',
        'Achievements',
      ],
    },
    {
      name: 'North East India',
      path: '/ne-india',
      subOptions: [
        'Basic Statistics of North East India',
        'Tourism Attraction',
      ],
    },
    {
      name: 'NER States',
      path: '/ner-states',
      subOptions: [
        'Assam',
        'Arunachal Pradesh',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Sikkim',
        'Tripura',
      ],
    },
    {
      name: 'Notices',
      path: '/notices',
      subOptions: [
        'Tenders & EOI',
        'Advertisements',
        'Press Releases and News',
      ],
    },
    {
      name: 'Documents',
      path: '/documents',
      subOptions: ['Archives', 'Other Documents and Reports'],
    },
    {
      name: 'Gallery',
      path: '/gallery',
      subOptions: ['Photo Gallery', 'Video Gallery'],
    },
    {
      name: 'Events',
      path: '/events',
      subOptions: ['Events', 'Trainings', 'Project Reports', 'News Articles'],
    },
  ];

  return (
    <div className='flex flex-col min-h-screen w-fit'>
      {/* TopContent - Header */}
      <header className='bg-white-200 py-4 justify-end items-center inline-flex'>
        {/* Place your header content here */}
        <div className=''>
          {/* TopHead */}
          <div className='justify-end items-end gap-[7.30px] inline-flex'>
            <div className='h-4 text-right text-stone-500 text-[13.5px] font-normal leading-tight'>
              <a href='https://necbdc.org.in/'>Old Website</a>
            </div>
            <div className='h-[18px] text-right text-neutral-700 text-[15px] font-normal leading-snug'>
              {' | '}
            </div>
            <div className='flex h-4 text-right text-stone-500 text-[13.5px] font-normal leading-tight'>
              <a href='https://webmail.necbdc.in/'>Employee Login</a>
            </div>
            <div className='h-[18px] text-right text-neutral-700 text-[15px] font-normal leading-snug'>
              {' | '}
            </div>
            <div className='flex h-4 text-right text-stone-500 text-[13.5px] font-normal leading-tight'>
              A+ A- A
            </div>
          </div>
        </div>
        {/* Example: */}
      </header>

      {/* Body */}

      <main className='flex-grow font-bodyFont'>
        <Header />
        <div className='flex items-center justify-center flex-col'>
          <div className='w-[80%] bg-[#343a40] text-[#fff] text-[15px] h-[42.50px] relative bg-neutral-700'>
            {/* Nav */}
            <div className='left-[33.48px] top-0 absolute justify-start items-start inline-flex'>
              {pages?.map((page) => (
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
                    <div className='row'>{page.name}</div>
                  </div>

                  {selectedPage === page.path && (
                    <div className='breadcrumb'>
                      <ul className='space-y-1'>
                        {page?.subOptions?.map((option) => (
                          <li key={option}>
                            <a
                              href=''
                              className='block rounded-lg bg-[#fff] px-4 py-2 text-sm font-medium text-gray-700'
                            >
                              {option}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className='bg-white py-4'>
        {/* Place your footer content here */}
        <Footer />
        {/* Example: */}
      </footer>
    </div>
  );
}

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'
      >
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'
        >
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'
      >
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'
        >
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'
      >
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'
        >
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium'
      >
        <a
          href='#'
          className='flex items-center hover:text-blue-500 transition-colors'
        >
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className='mx-auto max-w-screen-xl px-6 py-3'
      nonce={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
    >
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5'
        >
          Material Tailwind
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          nonce='some-string'
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
{
  /* <Navbar className="mx-auto max-w-screen-xl px-6 py-3"  nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
  <div className="flex items-center justify-between text-blue-gray-900">
    <Typography
      as="a"
      href="#"
      variant="h6"
      className="mr-4 cursor-pointer py-1.5"
    >
      Material Tailwind
    </Typography>
    <div className="hidden lg:block">
      <NavList />
    </div>
        <IconButton

          children={''} form={''} slot={''} style={''} title={''} className={''} color={''} translate={''} onClick={''}

      variant="text"
      className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
      ripple={false}
      onClick={() => setOpenNav(!openNav)}
    >
      {openNav ? (
        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
      ) : (
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
      )}
    </IconButton>

  </div>
  <Collapse open={openNav}>
    <NavList />
  </Collapse>
</Navbar> */
}
