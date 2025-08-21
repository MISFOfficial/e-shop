import Banner from '@/Components/Home/Banner';
import NewArrivel from '@/Components/Home/NewArrivel';
import ProductMarquee from '@/Components/Home/ProductMarquee';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className='relative banner-style'>
                <div className='bg-[#00000089]'>
                    <div className='px-6 lg:px-0 max-w-7xl mx-auto'>
                        <Banner></Banner>
                    </div>
                </div>
            </div>
            <NewArrivel></NewArrivel>
            <ProductMarquee></ProductMarquee>
            <div className='px-6 lg:px-0 max-w-7xl mx-auto'>

            </div>


        </div>
    );
};

export default HomePage;