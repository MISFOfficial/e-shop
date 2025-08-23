import Link from 'next/link';
import React from 'react';

const NavLink = () => {
    return (
        <ul className='flex items-center gap-10'>
            <Link href={'/'}>
                <li className='text-light2 font-bold text-lg'>Home</li>
            </Link>
            <Link href={'/products'}>
                <li className='text-light2 font-bold text-lg'>Products</li>
            </Link>
            <Link href={'/about_us'}>
                <li className='text-light2 font-bold text-lg'>About Us</li>
            </Link>
        </ul>
    );
};

export default NavLink;