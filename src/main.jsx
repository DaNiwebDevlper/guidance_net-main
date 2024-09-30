import { Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import { Home, Contact, AboutPage, Services, Register, Login } from './pages/index.js'
// library project

import LibraryLinks from "./library/pages/LibraryLinks.jsx"
import LibraryFroms from "./library/pages/LibraryForms.jsx"
import LibraryLayout from './library/pages/LibraryLayout.jsx'
import LibraryStaff from './library/pages/LibraryStaff.jsx'
import ImagesList from "./library/pages/ImagesList.jsx"
import ServiceProviders from './pages/services/ServiceProviders.jsx'
import ProfileDetails from './pages/services/ProfileDetails.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      {/* Services page route */}
      <Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path="/services/:serviceId" element={<ServiceProviders />} />
        <Route path="/services/:serviceId/:providerId" element={<ProfileDetails />} />
      </Route>

      {/* library admin page */}
      <Route path='/admin' element={<LibraryLayout />}>
        <Route path='/admin/library-links' element={<LibraryLinks />} />
        <Route path='/admin/library-forms' element={<LibraryFroms />} />
        <Route path='/admin/library-staff' element={<LibraryStaff />} />
        <Route path='/admin/gallery-images' element={<ImagesList />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)