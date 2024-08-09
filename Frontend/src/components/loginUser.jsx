// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { login } from '../features/authSlice'
// import { loginUser as loginUserApi } from '../services/user'

// function LoginUser() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // // get the navigation object
//   const navigate = useNavigate()

//  // // get dispatcher object
//   const dispatch = useDispatch()

//   const loginUser = async () => {
//     if (email.length == '') {
//       toast.error('Please enter email')
//     } else if (password.length == '') {
//       toast.error('Please enter password')
//     } else {
//      // // call register api
//       const response = await loginUserApi(email, password)

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
//         toast.success(`Welcome ${firstName}to store application`)
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
//               <button onClick={loginUser} className='btn btn-success'>
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

// export default LoginUser
