import React from 'react';
import "./section-six.css"

function SectionSix() {
    return (
        <section className='w-full min-h-[70vh] py-20'>
            <div id='section-six-main' className="border w-full min-h-[50vh] p-12 flex flex-col gap-5" >
                <h6 className='text-2xl font-bold leading-[30px] md:text-4xl md:leading-[60px]'>Increase your sales by <br className='hidden md:block' /> analyzing your colleced data!</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac nulla faucibus <br /> proin nisl augue. Vestibulum sem scelerisque suspendisse praesent pretium non. At <br /> mattis bibendum ut sed praesent. Nam at id elementum gravida.</p>
                <button id='section-six-button' className='py-2 px-2 w-36 md:w-48'>Learn More...</button>
            </div>
        </section>
    );
}

export default SectionSix;