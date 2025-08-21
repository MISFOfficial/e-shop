import Link from 'next/link';
import React from 'react';

const NavLink = () => {
    return (
        <ul className='flex items-center gap-15'>
            <Link href={'/'}>
                <li className='text-gray-700 font-bold text-lg'>Home</li>
            </Link>
            <Link href={'/about_us'}>
                <li className='text-gray-700 font-bold text-lg'>About Us</li>
            </Link>
        </ul>
    );
};

export default NavLink;