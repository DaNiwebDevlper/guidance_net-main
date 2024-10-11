import { Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import { Home, Contact, AboutPage, Services, Register, Login, SP_dashboard, UserProfile, ListProvider, AddProvider, AdminLayout, ServicesPage } from './pages/index.js'
import ServiceProviders from './pages/services/ServiceProviders.jsx'
import ProfileDetails from './pages/services/ProfileDetails.jsx'
import { Provider } from 'react-redux'
import store from "./redux/store.js"
import EditProvider from './pages/admin/EditProviders.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/sp_dashboard" element={<SP_dashboard />} />
      <Route path="/userProfile" element={<UserProfile />} />
      {/* Services page route */}
      <Route>
        <Route path='/services' element={<ServicesPage />}></Route>
        <Route path="/services/:field" element={<ServiceProviders />} />
        <Route path="/services/:field/:id" element={<ProfileDetails />} />
      </Route>

      {/* Admin page  route */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='/admin/list_providers' element={<ListProvider />} />
        <Route path='/admin/add_providers' element={<AddProvider />} />
        <Route path='/admin/edit_provider/:id' element={<EditProvider />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

