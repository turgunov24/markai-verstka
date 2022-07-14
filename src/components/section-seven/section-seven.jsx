import React from 'react';
import "./section-seven.css"

//assets
import { sectionSevenData } from './section-seven-additional/section-seven-data';
 

function SectionSeven() {
    return ( 
        <section className='w-full min-h-[70vh] flex flex-col items-center gap-5 pb-10'>
            <h6 className='mt-8 font-bold text-center text-2xl flex-wrap md:text-4xl'>Our Customer’s Reviews</h6>
            <div className='w-full min-h-[50vh] p-2 flex flex-wrap gap-4 justify-center md:gap-5' >
                {sectionSevenData.map((cards,key)=>(
                    <div id='section-seven-cards' className='w-full flex flex-col gap-3 p-1 xs:min-w-10/12 xs:w-[330px] xs:p-3 sm:w-[280px] md:w-[310px] md:p-5 lg:w-[310px]' key={key}>
                        <p className='flex-wrap text-[12px]'>{cards.lorem}</p>
                        <div className="flex justify-start items-center p-1 gap-3">
                            <img src={cards.img} width={40} className="rounded-full border" />
                            <div className='flex flex-col'>
                                <h6 className='font-bold'>{cards.name}</h6>
                                <small className='text-[11px]'>{cards.job}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}

export default SectionSeven;