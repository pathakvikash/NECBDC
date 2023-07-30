import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

const Header = () => {
  const router = useRouter();

  const handlePageClick = (path: any) => {
    router.push(path).catch((error) => {
      // Handle error here (e.g., redirect to error page)
      console.error('Error navigating to page:', error);
    });
  };

  return (
    <div className='flex flex-col'>
           <hr className="border-[#F58A2B] rounded-[2px] w-screen" />
      <div className="justify-center items-center gap-[15px] p-4 inline-flex">
        {/* Top */}
        <div className=" gap-[15px] inline-flex">
          <Image alt="" src={logo} />
          <div className="h-auto relative flex-col justify-start items-start flex">
            <div className=" text-red-700 text-[28.5px] font-black leading-9">
              North East Cane and Bamboo Development Council
            </div>
            <div className=" text-red-700 text-[15px] font-bold leading-snug">( NECBDC )</div>
            <div className=" text-black text-[18px] font-medium leading-tight">
              Under North Eastern Council, Ministry of DoNER, Government of India
            </div>
            <div className=" text-stone-500 text-[15px] font-normal leading-snug">
              Guwahati, Assam, India | An ISO 9001:2015 Certified Organization
            </div>
          </div>
        </div>
        <div className=" flex-col justify-end items-start inline-flex">
          <div className=" justify-end items-start inline-flex">
            <div className=" justify-start items-center inline-flex">
              <div className=" text-right text-neutral-700 text-[12px] font-normal leading-none">
                <a href="https://cdn.necbdc.in/docs/citizen_charter.pdf">
                Citizen's Charter |
                </a>
              </div>
            </div>
            <div className="justify-start items-center inline-flex">
              <div className=" text-right text-neutral-700 text-[12px] font-normal leading-none">
                FAQ |
              </div>
            </div>
            <div className=" text-right text-neutral-700 text-[12px] font-normal leading-none">
              Contact Us
            </div>
          </div>
          <div className=" ] pl-[1.50px] pr-[107.09px] pb-[15px] justify-start items-start inline-flex">
            <div className="pl-[11.25px] pr-[23.25px] py-[6.75px] bg-white border border-stone-300 justify-start items-center inline-flex">
              <div className=" pr-[59.92px] justify-start items-center inline-flex">
                <div className=" text-gray-500 text-[12px] font-normal">
                  Search- keyword, phrase
                </div>
              </div>
            </div>
            <div className=" pl-[7.50px] pr-[9px] pt-[10.20px] pb-[6.30px] bg-orange-400 border border-stone-300 justify-center items-center inline-flex">
              <img className=" w-4" alt="" src="https://necbdc.in/public/dist/eCommerceAssets/images/search.png" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
