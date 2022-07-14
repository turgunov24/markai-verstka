import React from 'react';
import './section-five.css'

//assets
import imageOne from "../../assets/images/sectionFiveImageOne.png"
import imageTwo from "../../assets/images/sectionFiveImageTwo.png"


function SectionFive() {
    return (
        <section className='w-full min-h-[60vh] flex flex-col '>
            <div className=" w-full py-10 flex flex-col items-center gap-5 md:flex-row justify-between">
                <div className='border-l-2 text-start px-5 flex flex-col gap-[5px]'>
                    <h1>What is</h1>
                    <h6 className='text-2xl font-bold'>Custom Interface</h6>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vitae quam sit scelerisque enim in sed diam nec, blandit. <br /> Amet tellus massa sed iaculis. Mauris, curabitur scelerisque <br /> sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.</p>
                    <button id='section-five-button' className='py-2 px-1 w-40'>Learn More...</button>
                </div>
                <div className='p-10'>
                    <img src={imageOne} className="object-contain" />
                </div>

            </div>
            <div className="w-full py-10 flex flex-col-reverse items-center gap-10 md:flex-row-reverse justify-between md:gap-10 md:items-end">
                <div className='border-l-2 text-start px-5 flex flex-col gap-[5px]'>
                    <h1>You can maintain your</h1>
                    <h6 className='text-2xl font-bold'>Website with Ai</h6>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vitae quam sit scelerisque enim in sed diam nec, blandit. <br /> Amet tellus massa sed iaculis. Mauris, curabitur scelerisque <br /> sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.</p>
                    <button id='section-five-button' className='py-2 px-1 w-40'>Learn More...</button>
                </div>
                <div >
                    <img src={imageTwo} />
                </div>

            </div>

        </section>
    );
}

export default SectionFive;