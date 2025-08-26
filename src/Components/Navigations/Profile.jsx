'use client'

import Image from 'next/image';
import React from 'react';
import img from '../../../public/asset/user.png'
import Swal from 'sweetalert2';
import { signOut, useSession } from 'next-auth/react';


const Profile = () => {

    const { data: session } = useSession()
    const user = session.user

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, log me out",
        }).then((result) => {
            if (result.isConfirmed) {
                signOut({ callbackUrl: "/login" }); // Logout and redirect to login page
                Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
            }
        });
    };

    return (
        <div className="dropdown dropdown-end">
            <Image src={img} width={100} height={100}
                tabIndex={0} role="button" className="w-14 h-15 object-cover rounded-full cursor-pointer"></Image>
            <ul tabIndex={0} className="dropdown-content menu  bg-white rounded-box z-1 w-60 p-4 mt-10 shadow-sm text-dark">
                <div className='border bg-gray-200 rounded place-items-center p-2 mb-5'>
                    <Image src={img} width={100} height={100} alt={user?.name}
                        tabIndex={0} role="button" className="w-14 h-15 object-cover rounded-full"></Image>
                    <h1 className='mt-5 font-bold '>{user?.email}</h1>
                </div>
                <li ><a href='deshboard/user_profile'>Deshborad</a></li>
                <li onClick={handleLogout} className='text-red-500'><a>Log out</a></li>
            </ul>
        </div>
    );
};

export default Profile;