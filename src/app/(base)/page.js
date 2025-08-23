import Banner from '@/Components/Home/Banner';
import NewArrivel from '@/Components/Home/NewArrivel';
import ProductsSection from '@/Components/Home/ProductsSection';
import React from 'react';

const HomePage = async () => {

    return (
        <div className=''>
            <div className='banner-style'>
                <div className='bg-[#00000089]'>
                    <div className='px-6 lg:px-0 max-w-7xl mx-auto'>
                        <Banner></Banner>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200'>
                <div>
                    <div className='px-6 lg:px-0 max-w-7xl mx-auto '>
                        <NewArrivel></NewArrivel>
                    </div>
                </div>
                {/* <ProductMarquee></ProductMarquee> */}
                <div className=' bg-gray-100 py-16'>
                    <div className='px-6 lg:px-0 max-w-7xl mx-auto '>
                        <ProductsSection></ProductsSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;