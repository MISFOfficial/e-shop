import React from 'react';
import DeshMenu from './Components/DeshMenu';


const Deshboard = ({ children }) => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <div className="navbar bg- w-full lg:hidden">
                        <div className="flex items-center">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                            <div className="mx-2 flex-1 px-2">Deshboard</div>
                        </div>
                    </div>

                    <div className='p-4 md:p-12 min-h-screen '>
                        {children}
                    </div>

                </div>
               <DeshMenu></DeshMenu>
            </div>
        </div>
    );
};

export default Deshboard;