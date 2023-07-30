import React from 'react';

// Sample data for top links
const topLinksData = [
  {
    title: 'About Us',
    icon: 'https://necbdc.in/public/dist/eCommerceAssets/images/consultancy.png',
  },
  {
    title: 'History',
    icon: 'https://necbdc.in/public/dist/eCommerceAssets/images/history.png',
  },
  {
    title: 'Associations',
    icon: 'https://necbdc.in/public/dist/eCommerceAssets/images/partner.png',
  },
  {
    title: 'NECBDC Staff',
    icon: 'https://necbdc.in/public/dist/eCommerceAssets/images/staff.png',
  },
];

export default function About() {
  const objectives = [
    {
      title: 'To promote scientific development in the cane and bamboo sector.',
    },
    {
      title:
        'To provide skill upgradation and awareness to entrepreneurs, artisans, technicians, trainers and others.',
    },
    {
      title:
        'To promote employment and income generation activities in the cane and bamboo sector.',
    },
    {
      title:
        'To source and develop relevant technologies inside and outside the country for improving the cane and bamboo sector.',
    },
    {
      title:
        'To develop the market and create market linkage for enterprises and artists in the north eastern region.',
    },
    {
      title:
        'To liaise with premier institutions, state government and other bodies for taking the cane and bamboo sector forward.',
    },
    {
      title: 'To set up documentation centre and a data bank for referral.',
    },
    {
      title: 'To provide consulting services in the field of cane and bamboo.',
    },
    {
      title: 'To encourage and participate in any other developingal activity.',
    },
    {
      title:
        'To create a Centre of Excellence which will promote the Cane and Bamboo Industry in the North Eastern Region.',
    },
  ];

  return (
    <section className='container flex flex-col justify-center items-center'>
      {/* Row section */}
      <div className='w-[80%] flex flex-wrap justify-center items-center'>
        <div className='breadcrumb'>
          Home /<span className='active'>&nbsp;About Us</span>
        </div>
      </div>

      {/* RowTopLink section */}
      <div className='w-[80%] flex justify-center radio-toolbar items-center mt-4'>
        {topLinksData.map((link, index) => (
          <label
            key={index}
            className='flex w-[150px] flex-col items-center p-2'
          >
            <img className='w-16 h-16' src={link.icon} alt='Placeholder' />
            <span className='text-center mt-2'>{link.title}</span>
          </label>
        ))}
      </div>

      {/* Details section */}
      <div className='w-[80%] m-3  flex justify-between mt-8'>
        <div className='w-1/2 p-4 gap-3'>
          <h2 className='text-2xl font-bold mb-4'>About NECBDC</h2>
          <p>
            North East Cane and Bamboo Development Council has facilitated the
            emergence of a new scenario in the North Eastern India. Almost two
            decades of its existence in this part of India has struck the
            imaginations of the population here and led them on to dream about
            the possibility of a healthy future. Inevitably a future replete
            with expanded livelihood opportunities stemming unendingly from the
            right and rich harvest of Bamboos. NECBDC strongly believe in the
            thrust which will be felt globally following our role as the
            matchmaker of the human resource, bamboo and technology.
            <br />
            NECBDC was incorporated with the objective of organizing the
            hitherto untapped bamboo sector of NE India which is a significant
            occupant of its topography, culture and customary practices since
            time immemorial. Its formal existence came into being as a
            coordinated effort headed by North Eastern development Finance
            Corporation (NEDFi) along with the Department of Science and
            Technology, Govt of India, UNIDO and UNDP. NECBDC is the field
            implementation agency and forms a part of the Technology Management
            Program (TMP) which is a joint effort of Govt of India and UNDP.
            NECBDC has embarked on a new phase of programmes and projects in the
            bamboo sector with renewed vigor under the aegis of North Eastern
            Council (NEC). It can be said that NECBDC is one of core outreach
            programme of NEC for giving a shift to the economy of NE in the
            positive direction. The progress of these two organizations has been
            acknowledged by the greater community as the change agent whose need
            was continually felt in the region.
          </p>
        </div>
        <div className='w-1/2 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Objectives</h2>
          {objectives.map((objective, index) => (
            <p key={index} className='mb-2'>
              ▸ {objective.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
