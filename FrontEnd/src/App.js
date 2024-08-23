import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ProductGrid from './component/ProductGrid';
import Cart from './component/Cart';
import Profile from './component/Profile';
import ProductManager from './component/ProductManager';
import Logout from './component/Logout';
import Payment from './component/Payment';
// import Vendor from './component/Vendor';
import AddVendorForm from './component/AddVendorForm';
import { products } from './component/ProductGrid';
import Login from './component/Login';
import Register from './component/Register';
import AdminDashboard from './component/AdminDashboard';
import AllProducts from './component/AllProducts';
import AllVendors from './component/AllVendors';
import VendorDashboard from './component/VendorDashboard';
import UpdateProduct from './component/UpdateProduct';
import AddressForm from './component/AddressForm';
import CategoryForm from './component/CategoryForm';
import AllCustomers from './component/AllCustomers';
import ProductForm from './component/ProductForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from './component/Category';
import UpdateForm from './component/UpdateForm';
import AllUser from './component/AllUser';
import VendorProfile from './component/VendorProfile';
import ManageCategory from './component/ManageCategory';
import AdminAllProducts from './component/AdminAllProduct';
const App = () => {
    const [cart, setCart] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userRole, setUserRole] = useState('vendor'); // 'vendor' or 'customer'

    const handleAddToCart = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1
        }));
    };

    const handleRemoveFromCart = (productId) => {
        setCart(prevCart => {
            if (prevCart[productId] === 1) {
                const { [productId]: _, ...rest } = prevCart;
                return rest;
            } else {
                return {
                    ...prevCart,
                    [productId]: prevCart[productId] - 1
                };
            }
        });
    };

    const handleBuy = () => {
        alert('Thank you for your purchase!');
        setCart({});
    };

    const location = useLocation();

    const showNavbar = ![
        '/login', 
        '/register', 
        '/admindashboard', 
        '/products', 
        '/addvendor', 
        '/allproducts', 
        '/allvendors',
        '/addcategory',
        '/allusers',
        '/allcustomers',
        '/addaddressform',
        '/vendordashboard','/allcategory','/managecategory','/vendorprofile','/adminmanagecategory','/',
    ].includes(location.pathname);

    return (
        <>
            {showNavbar && (
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff6347', padding: '10px' }}>
                    <div className="container-fluid">
                        <h2>GroceryBuddy</h2>
                        {/* <img src='image\image.jpeg' alt='logo' /> */}
                        {/* <Link className="navbar-brand text-white brand-size" to="https://www.google.com/imgres?q=grocer%20management%20hd%20logo&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fgrocery-store-logo-design-template-260nw-2087577148.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgrocery-store-logo&docid=7B_M_ppBhAY_pM&tbnid=9E4RYSgfNcL58M&vet=12ahUKEwi5sqqF9fiHAxUPR2wGHbVwH80QM3oECFkQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwi5sqqF9fiHAxUPR2wGHbVwH80QM3oECFkQAA">GroceryBuddy</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/userdashboard">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/cart">Cart ({Object.keys(cart).length})</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}

            <Routes>
                <Route 
                    path="/userdashboard" 
                    element={
                        <ProductGrid 
                            cart={cart} 
                            handleAddToCart={handleAddToCart} 
                            handleRemoveFromCart={handleRemoveFromCart} 
                        />
                    } 
                />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cart={cart} 
                            products={products} 
                            handleAddToCart={handleAddToCart} 
                            handleRemoveFromCart={handleRemoveFromCart} 
                            handleBuy={handleBuy} 
                        />
                    } 
                />
                <Route 
                    path="/profile" 
                    element={<Profile />} 
                />
                {userRole === 'vendor' && (
                    <>
                        <Route 
                            path="/products" 
                            element={<ProductManager />} 
                        />
                        <Route 
                            path="/addvendor" 
                            element={<AddVendorForm />} 
                        />
                    </>
                )}
                <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
                <Route 
                    path="/payment" 
                    element={<Payment />} 
                />
                <Route 
                    path="/admindashboard" 
                    element={<AdminDashboard />} 
                />
                <Route path="/vendordashboard" element={<VendorDashboard />} />
                <Route path="/updateproduct" element={<UpdateProduct />} />
                <Route path="/addaddressform" element={<AddressForm />} />
                <Route path="/addcategory" element={<CategoryForm />} />
                <Route path="/allproducts" element={<AllProducts />} />
                <Route path="/allvendors" element={<AllVendors />} />
                <Route path="" element={<Login />} />
                <Route path="/" element={<Login />} />
                
                <Route path="/register" element={<Register />} />
                <Route path="/allcustomers" element={<AllCustomers />} />
                <Route path="products/add" element={<ProductForm />} />
                <Route path="/products" element={<UpdateForm />} />
                <Route path="products/update/:productId" element={<ProductForm />} />


                <Route path="/allusers" element={<AllUser />} />
                <Route path="/vendorprofile" element={<VendorProfile />} />
                <Route path="/adminallproduct" element={<AdminAllProducts />} />
                

        
                <Route path="/adminmanagecategory" element={<ManageCategory />} />
                <Route path="/managecategory" element={<Category />} />
            </Routes>
        </>
    );
};

// Wrap App component with Router
const AppWrapper = () => (
    <Router>
        <App />
        <ToastContainer />
    </Router>
);

export default AppWrapper;
