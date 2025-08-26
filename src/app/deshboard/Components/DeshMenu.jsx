import { IoSettings } from "react-icons/io5";
import { FaBoxOpen, FaHistory, FaHome, FaSearchLocation, FaSignOutAlt, FaUser, FaUserEdit } from 'react-icons/fa';
import Link from 'next/link';
import { getToken } from "next-auth/jwt";

const DeshMenu = () => {

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className='min-h-full bg-p2 [#d8d8d8] text-base-content w-60 md:w-80  flex flex-col items-start justify-between bg-black'>
                <ul className="menu  p-4">
                    {/* Sidebar content here */}
                    <li>
                        <Link href={'/'} className="flex items-center gap-2">
                            <FaHome /> Main Page
                        </Link>
                    </li>
                    <li>
                        <Link href={'/deshboard/user_profile'} className="flex items-center gap-2">
                            <FaUser /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={'/deshboard/add_product'} className="flex items-center gap-2">
                            <FaHome /> Add Product
                        </Link>
                    </li>

                </ul>

                <div className='w-full mb-5 md:mb-10'>
                    <div className='divider w-full  m-0'></div>
                    <ul className='menu p-4'>
                        <li>
                            <Link href={''} className="flex items-center gap-2">
                                <span><IoSettings /></span> Setting
                            </Link>
                        </li>
                        <li >
                            <div className='flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-800'>
                                <span><FaSignOutAlt /></span>
                                <span>Log Out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeshMenu;