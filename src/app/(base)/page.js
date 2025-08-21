import Banner from '@/Components/Home/Banner';
import NewArrivel from '@/Components/Home/NewArrivel';
import ProductMarquee from '@/Components/Home/ProductMarquee';
import ProductsSection from '@/Components/Home/ProductsSection';
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
            <div className=' bg-gray-50 py-16'>
               <div className='px-6 lg:px-0 max-w-[1600px] mx-auto '>
                 <ProductsSection></ProductsSection>
               </div>
            </div>
        </div>
    );
};

export default HomePage;