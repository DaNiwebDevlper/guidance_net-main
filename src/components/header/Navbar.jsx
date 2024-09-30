import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderLine from "../HeaderLine";

const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },

]
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <HeaderLine />
            <nav className="w-full backdrop-blur-md bg-[#d1e3ff] sticky z-50 top-0">

                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-11">
                    {/*  logo */}
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-2 md:block">
                            <Link to="/" onClick={() => scrollToTop()}>
                                <img
                                    src="/assets/logo.png"
                                    alt="Logo"
                                    className="w-[150px]"
                                />
                            </Link>

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => {
                                        setNavbar(!navbar);
                                    }}
                                >
                                    {navbar ? (
                                        <FaTimes className="text-xl text-sky-600" />
                                    ) : <FaBars className="text-xl text-sky-600" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* NavLinks */}
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul
                                className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 px-4 py-4 font-semibold rounded-full md:ml-[-70px]">

                                {NavLinks.map((navLink, i) => (
                                    <li
                                        className="text-black font-semibold text-[18px] hover:text-rose-800"
                                        key={i}>
                                        <NavLink
                                            onClick={() => { setNavbar(false); scrollToTop() }}
                                            to={navLink.path}
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-primary font-bold" : "text-gray-900"
                                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-primary lg:p-0`
                                            }
                                        >
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}