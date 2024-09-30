import SideBar from "../component/Sidebar"
import { Outlet } from 'react-router-dom';
const LibraryLayout = () => {
    return (
        <div className='flex min-h-screen m-0 p-0'>
            <SideBar />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default LibraryLayout