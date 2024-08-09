import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

// used to register react-toastify
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Cart from './components/cart'
import MyOrders from './components/myOrders'
import NavigationBar from './components/navigationBar'
import ProductGallery from './components/product-gallery'


import { login } from './features/authSlice'

import LoginCustomer from './components/loginCustomer'
import UpdateCustomer from './components/updateCustomer'
import RegisterCustomer from './components/registerCustomer'
import ProfileCustomer from './components/profileCustomer'
import VendorProducts from './components/vendor/vendorProducts'
import VendorList from './components/Admin/Vendor/vendorList'
import VendorProductList from './components/Admin/Vendor/vendorProductList'
import AddVendor from './components/Admin/Vendor/addNewVendor'
import AdminOrders from './components/Admin/Vendor/adminOrders'
import AddProduct from './components/vendor/addProduct'
import UpdateProduct from './components/vendor/updateProduct'
import AddCategory from './components/Admin/Category/addNewCategory'
import CategoryList from './components/Admin/Category/categoryList'
import AdminLogin from './components/Admin/AdminLogin'
import VendorLogin from './components/vendor/loginVendor'
import NavBarAdmin from './components/navBarAdmin'
import OrderDetails from './components/Admin/Vendor/orderDetails'
import Inventory from './components/Admin/inventory'
import NavBarVendor from './components/navBarVendor'
import ModalWithInput from './components/profile'
import ChartComponent from './components/chart'
import MyCarousel from './components/Customer/carousel'
import AllAdminOrders from './components/Admin/AllAdminOrders'
import { PageNotFound } from './PageNotFound'
import UnAuthorized from './Unauthorised'

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

  const role =sessionStorage.getItem('role')

  return (
    // <div className='container-fluid'>
    <div>
   
      {loginStatus &&  role==='user'  && <NavigationBar />}
      {loginStatus &&  role==='admin'  && <NavBarAdmin />}
      {loginStatus &&  role==='vendor'  && <NavBarVendor />}

      {/* <div className='container'> */}
      <div>
        <Routes>
          {/* home component  */}
          {/* <Route path='/' element={} /> */}

          <Route path='/NavigationBar' element={NavigationBar} />

        <Route path='/modalWithInput' element={ModalWithInput} />

          {/* login component */}
          {/* <Route path='/' element={<LoginUser />} /> */}
          <Route path='/LoginCustomer' element={<LoginCustomer/>} />
          {/* register component */}
          <Route path='/register' element={<RegisterCustomer />} />
          {/* update customer component */}
          <Route path='/updateCustomer' element={<UpdateCustomer />} />


          {/* product-gallery component */}
          <Route path='/product-gallery' element={<ProductGallery />} />

          {/* cart component */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/orderDetails' element={<OrderDetails/>}/>


          {/* my orders component */}
          <Route path='/my-orders' element={<MyOrders />} />

          {/* carousel */}
          <Route path='/carousel' element={<MyCarousel/>}/>


          {/* customer profile  */}
          <Route path='/profileCustomer' element={<ProfileCustomer/>}/>

    
          <Route path='/categoryList' element={<CategoryList />} />
          <Route path='/addNewCategory' element={<AddCategory />} />

          <Route path="/*" element={<PageNotFound/>} />
        <Route path='/401' element={<UnAuthorized />} />
 {/* from admin perspective list of vend profile  */}
          <Route path='/vendorList' element={<VendorList/>}/>
          <Route path='/vendorProductList/:vendorId' element={<VendorProductList />} />
          <Route path='/addNewVendor' element={<AddVendor />} />
          <Route path='/adminOrders' element={<AdminOrders />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/chart' element={<ChartComponent/>}/>
          <Route path='/adminorder' element={<AllAdminOrders/>}/>

{/* vendor_product related routes */}
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
