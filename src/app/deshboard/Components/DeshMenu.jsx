import { IoSettings } from "react-icons/io5";
import { FaBoxOpen, FaHistory, FaHome, FaSearchLocation, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import Link from 'next/link';

const DeshMenu = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className='min-h-full bg-p2 [#d8d8d8] text-base-content w-60 md:w-80  flex flex-col items-start justify-between bg-black'>
                <ul className="menu  p-4">
                    {/* Sidebar content here */}
                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaHome /> Manage Profile
                        </Link>
                    </li>

                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaBoxOpen /> My Booking
                        </Link>
                    </li>


                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaHistory /> Add Story
                        </Link>
                    </li>
                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaSearchLocation /> Mange Stories
                        </Link>
                    </li>
                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaSearchLocation /> Join as a Tour Guide
                        </Link>
                    </li>


                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaUserEdit /> My Assigned Tours
                        </Link>
                    </li>



                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaUserEdit /> Add Package
                        </Link>
                    </li>
                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaUserEdit /> Manage Users
                        </Link>
                    </li>
                    <li>
                        <Link href={''} className="flex items-center gap-2">
                            <FaUserEdit /> Manage Candidates
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