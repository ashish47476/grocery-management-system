import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

// used to register react-toastify
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import NavigationBar from './components/navigationBar'

import { login } from './features/authSlice'

import LoginCustomer from './components/loginCustomer'
import UpdateCustomer from './components/updateCustomer'
import RegisterCustomer from './components/registerCustomer'
import VendorProducts from './components/vendor/vendorProducts'
import VendorList from './components/Admin/Vendor/vendorList'
import VendorProductList from './components/Admin/Vendor/vendorProductList'
import AddVendor from './components/Admin/Vendor/addNewVendor'
import AdminOrders from './components/Admin/Vendor/adminOrders'
import AddProduct from './components/vendor/addProduct'
import UpdateProduct from './components/vendor/updateProduct'
import AdminLogin from './components/Admin/AdminLogin'
import VendorLogin from './components/vendor/loginVendor'

function App() {
  // use selector accepts a function which passes the store global state
  // at the moment we are interested only in auth slice
  const loginStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['token'] && sessionStorage['token'].length > 0) {
      // update the auth slice status to true
      dispatch(login())
    }
  }, [])

  return (
    <div className='container-fluid'>
      {/* navigation bar here */}
      {/* conditional rendering */}
      {loginStatus && <NavigationBar />}
      <div className='container'>
        <Routes>
          
 {/* for customer   */}
          <Route path='/LoginCustomer' element={<LoginCustomer/>} />
          <Route path='/register' element={<RegisterCustomer />} />
          <Route path='/updateCustomer' element={<UpdateCustomer />} />


 {/* for admin   */}
          <Route path='/vendorList' element={<VendorList/>}/>
          <Route path='/vendorProductList/:vendorId' element={<VendorProductList />} />
          <Route path='/addNewVendor' element={<AddVendor />} />
          <Route path='/adminOrders' element={<AdminOrders />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>

{/* for vendor */}
          <Route path='/vendorProducts/:vendorId' element={<VendorProducts/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/updateProduct/:productId' element={<UpdateProduct/>}/>
          <Route path='/vendorlogin' element={<VendorLogin/>}/>

          <Route path='/' element={<LoginCustomer/>} />

          

        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
