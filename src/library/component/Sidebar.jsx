import React from 'react';
import { FaImage, FaWpforms } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineEditNote } from "react-icons/md";

const menu = [
    { title: "Gallery Images", href: "/admin/gallery-images", icon: <FaImage size={25} /> },
    { title: "Library Links", href: "/admin/library-links", icon: <PiLinkSimpleBold size={25} /> },
    { title: "Library Forms", href: "/admin/library-forms", icon: <FaWpforms size={25} /> },
    { title: "Library Staff", href: "/admin/library-staff", icon: <IoIosPersonAdd size={25} /> },
    { title: "Add Notice", href: "/admin/add-notice", icon: <MdOutlineEditNote size={30} /> },
];

const SideBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='sm:w-[250px] w-[80px]  min-h-[80vh] pr-3 bg-slate-100'>
            <div className="flex flex-col pl-5 gap-y-5 w-full pt-5">
                {menu.map((options) => {
                    const isActive = currentPath === options.href;
                    return (
                        <Link to={options.href} key={options.title}>
                            <div className={`sm:w-full w-fit rounded-lg  items-center p-2 text-2xl sm:text-lg flex gap-2 sm:px-3 sm:py-4 ${isActive ? "bg-rose-500 text-white" : "bg-white text-black hover:bg-slate-200"}`}>
                                {options.icon}
                                <span className='hidden sm:inline-block text-md'>{options.title}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
