// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../features/authSlice'

// function NavBarAdmin() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // logout the user
//   const logoutUser = () => {
//     // clear the session storage changes

//     // sessionStorage.removeItem('token')
//     sessionStorage.removeItem('role')
//     sessionStorage.removeItem('fname')
//     sessionStorage.removeItem('customerId')
//     sessionStorage.removeItem('vendorId')
//     sessionStorage.removeItem('firstName')

//     // hide the navigation bar
//     dispatch(logout())

//     // redirect to login page
//     navigate('/')
//   }

//   return (
//     <div>
//       <nav className='navbar navbar-expand-lg bg-body-tertiary'>
//         <div className='container-fluid'>
//           <a className='navbar-brand'>Store</a>
//           <button
//             className='navbar-toggler'
//             type='button'
//             data-bs-toggle='collapse'
//             data-bs-target='#navbarSupportedContent'
//             aria-controls='navbarSupportedContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//             <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
//               <li className='nav-item'>
//                 <Link className='nav-link' to='/product-gallery'>
//                   Products
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/cart'>
//                   Cart
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/vendorList'>
//                     Vendor
//                  </Link>
//               </li>

//               <li className='nav-item'>
//                 {/* <Link className='nav-link' to='/cart'> */}
//                 <Link className='nav-link' to='/profileCustomer'>
//                   Profile
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className='d-flex'>
//             <button onClick={logoutUser} className='btn'>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default NavBarAdmin





import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/authSlice'
import logo from '../images/logo-color1.png'

import logo1 from '../images/ln3.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles.css'

function NavBarAdmin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // logout the user
  const logoutUser = () => {
    // clear the session storage changes
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('fname')
    sessionStorage.removeItem('customerId')
    sessionStorage.removeItem('vendorId')
    sessionStorage.removeItem('firstName')

    // hide the navigation bar
    dispatch(logout())

    // redirect to login page
    navigate('/')
  }

  return (
    <>
    <div>
      <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top'>

        <div className='container-fluid'>
        <Link to='/vendorList' className='navbar-brand'>
          <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
          <img src={logo1} alt="Logo2" style={{ maxWidth: '200px' }} />
        </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          > 
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            

              <li className='nav-item'>
                <Link className='nav-link' to='/vendorList'>
                <span className='nav-text'>Vendor</span>
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/orderDetails'> 
                <span className='nav-text'>Orders</span>
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/inventory'>
                <span className='nav-text'>Inventory</span>
                </Link>
              </li>

              {/* <li className='nav-item'>
                <Link className='nav-link' to='/cart'>
                <span className='nav-text'>Revenue</span>
                </Link>
              </li> */}

              <li className='nav-item'>
                <Link className='nav-link' to='/chart'>
                <span className='nav-text'>Analysis</span>
                </Link>
              </li>
            </ul>
          </div>
           {/* Search Box */}
           {/* <form className='d-flex mx-2'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-light' type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form> */}

            
          <div className='d-flex'>
          <button onClick={logoutUser} className='btn btn-custom'>
          <a href="#" className="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </a>
            
            </button>
          </div>
        </div>
      </nav>

    </div>

    </>
  )
}

export default NavBarAdmin