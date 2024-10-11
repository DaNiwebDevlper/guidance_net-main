import { useEffect, useState } from "react";
import { FaPhoneVolume, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LinkComp from "./LinkComp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const HeaderLine = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const userRole = useSelector((state) => state.auth.role);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        navigate("/login");
        dispatch(logout())
    };
    return (
        <div className="w-full h-[60px] bg-black/90 text-white flex justify-between px-9 items-center">
            <div className="flex gap-2 items-center">
                <FaPhoneVolume className="text-xl text-bgSecondary" />
                <p>+92-3497499921</p>
            </div>
            {/* Conditionally render login button or profile icon based on login state */}
            {isLoggedIn ? (
                <div className="flex items-center gap-4">
                    <LinkComp to={
                        userRole === "client"
                            ? "/userProfile"
                            : userRole === "service_provider"
                                ? "/sp_dashboard"
                                : "/admin"
                    }>
                        {/* Profile icon */}
                        <FaUserCircle className="text-4xl cursor-pointer" />
                    </LinkComp>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/login">
                    <button className="text-md font-semibold font-mono px-5 py-2 border border-white text-white rounded">
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
};

export default HeaderLine;
