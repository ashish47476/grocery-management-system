import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
  import { toast } from 'react-toastify'
import { login } from '../features/authSlice'
import { loginCustomer as loginCustomerApi } from '../services/customer'
import Sidebar from './Sidebar'
import '../../src/Sidebar.css'
import v1 from "../videos/v1.mp4"
import logo1 from '../images/lnbg.png'

function LoginCustomer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // // get the navigation object
  const navigate = useNavigate()

 // // get dispatcher object
  const dispatch = useDispatch()

  const loginCustomer = async () => {
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
     // // call register api
      const response = await loginCustomerApi(email, password)

     // // parse the response
      // if (response['status'] === 'ok') {
        if(response){
          //  debugger

          console.log( "response......" )

          console.log( response )
          // debugger
//------------
          // // parse the response's data and extract the token
        // const { token, name, mobile, profileImage } = response['data']

      //  // store the token for making other apis
        // sessionStorage['token'] = token
        // sessionStorage['email'] = email
        // sessionStorage['mobile'] = mobile
        // sessionStorage['profileImage'] = profileImage

       // // update global store's authSlice with status = true
//------------------------
          const{id,firstName,role,token} = response.data
          // console.log("customerId--"+response.data.customerId )
          sessionStorage['userId']=id
          sessionStorage['firstName'] =firstName
          sessionStorage['role'] = role
          sessionStorage['token']= token

       dispatch(login())

        // toast.success(`Welcome ${name} to store application`)
        toast.success(`Welcome ${firstName} to grocery store `)
        // // go back to login
        navigate('/product-gallery')
      } else {
        toast.error('Invalid user name or password')
      }
    }
  }

  return (

    <div className="LoginUser" id="outer-container">
    <Sidebar pageWrapId={'page-wrap'} />
      <div id="page-wrap">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        <video autoPlay loop muted className="video-background">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
     <div className="white-text"><h1 style={{ textAlign: 'center', margin: 10 }}>Customer</h1></div>
      
<div className='input-box-customer'>
<div className='row'>
  <div className='col'> <div class="logo-container-customer">
  <img src={logo1} alt="Logo" class="logo" id="glow-logo" style={{ maxWidth: '250px', marginLeft: 3 }} />
  </div></div>
  <div className='col'>
    <div className='form'>
      <div className='mb-3'>
        <label htmlFor='' className="white-text">Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className="white-text">Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <div className='white-text'>
          Don't have an account? <Link to='/register'>Register here</Link>
        </div>
        <button onClick={loginCustomer} className='btn btn-success'>
          Login
        </button>
      </div>
    </div>
  </div>
  {/* <div className='col'></div> */}
</div>
      </div>
      
    </div>

    </div>
    
  )
}

export default LoginCustomer



// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { login } from '../features/authSlice'
// import { loginCustomer as loginCustomerApi } from '../services/customer'

// function LoginCustomer() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // // get the navigation object
//   const navigate = useNavigate()

//  // // get dispatcher object
//   const dispatch = useDispatch()

//   const loginCustomer = async () => {
//     if (email.length == '') {
//       toast.error('Please enter email')
//     } else if (password.length == '') {
//       toast.error('Please enter password')
//     } else {
//      // // call register api
//       const response = await loginCustomerApi(email, password)

//      // // parse the response
//       // if (response['status'] === 'ok') {
//         if(response){
//           //  debugger

//           console.log( "response......" )

//           console.log( response )
//           // debugger
// //------------
//           // // parse the response's data and extract the token
//         // const { token, name, mobile, profileImage } = response['data']

//       //  // store the token for making other apis
//         // sessionStorage['token'] = token
//         // sessionStorage['email'] = email
//         // sessionStorage['mobile'] = mobile
//         // sessionStorage['profileImage'] = profileImage

//        // // update global store's authSlice with status = true
// //------------------------
//           const{customerId,firstName,phone} = response.data
//           // console.log("customerId--"+response.data.customerId )
//           sessionStorage['customerId']=customerId
//           sessionStorage['firstName'] =firstName

//        dispatch(login())

//         // toast.success(`Welcome ${name} to store application`)
//         toast.success(`Welcome ${firstName} to grocery store `)
//         // // go back to login
//         navigate('/product-gallery')
//       } else {
//         toast.error('Invalid user name or password')
//       }
//     }
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', margin: 10 }}>Login</h1>

//       <div className='row'>
//         <div className='col'></div>
//         <div className='col'>
//           <div className='form'>
//             <div className='mb-3'>
//               <label htmlFor=''>Email</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 onChange={(e) => {
//                   setEmail(e.target.value)
//                 }}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor=''>Password</label>
//               <input
//                 type='password'
//                 className='form-control'
//                 onChange={(e) => {
//                   setPassword(e.target.value)
//                 }}
//               />
//             </div>
//             <div className='mb-3'>
//               <div className='mb-3'>
//                 Don't have an account? <Link to='/register'>Register here</Link>
//               </div>
//               <button onClick={loginCustomer} className='btn btn-success'>
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className='col'></div>
//       </div>
//     </div>
//   )
// }

// export default LoginCustomer
