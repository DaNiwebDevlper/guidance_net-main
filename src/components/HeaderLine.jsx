import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderLine = () => {
    return (

        <div className="w-full h-[60px] bg-black/90 text-white flex justify-between px-9 items-center">
            <div className="flex gap-2 items-center">
                <FaPhoneVolume className="text-xl text-bgSecondary" />
                <p>+92-3163866329</p>
            </div>
            <Link to="/login">
                <button className="text-md font-semibold font-mono px-5 py-2 border border-white text-white rounded">Login</button>
            </Link>
        </div>
    )
}

export default HeaderLine