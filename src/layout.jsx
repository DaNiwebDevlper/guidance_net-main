
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div className='app'>
            <Navbar />
            <Toaster />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout