import Link from 'next/link';
import React from 'react';

const NavLink = () => {
    return (
        <ul>
            <Link href={'/'}>
                <li className='text-gray-700 font-bold text-lg'>Home</li>
            </Link>
        </ul>
    );
};

export default NavLink;