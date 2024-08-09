import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../../features/authSlice'
import Sidebar from '../Sidebar'
import { adminLogin } from '../../services/admin'
import '../../../src/Sidebar.css'
import v1 from "../../videos/v.mp4"
import logo1 from '../../images/ln2.png'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // // get the navigation object
  const navigate = useNavigate()

 // // get dispatcher object
  const dispatch = useDispatch()


  const AdminLoginAuth = async () => {
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
     // // call register api
      const response = await adminLogin(email, password)

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
          const{firstName,role} = response.data
          // console.log("customerId--"+response.data.customerId )
          //sessionStorage['vendorId']=vendorId
          sessionStorage['firstName']=firstName
          sessionStorage['role'] = role
          

       dispatch(login())                     //doubt

        // toast.success(`Welcome ${name} to store application`)
        toast.success(`Welcome ${firstName} `)
        // // go back to login
        navigate('/vendorList')
      } else {
        toast.error('Invalid user name or password')
      }
    }
  }

  return (

    <div className="LoginUser" id="outer-container">
      
    <Sidebar pageWrapId={'page-wrap'} />
      <div id="page-wrap">

      <video autoPlay loop muted className="video-background">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Admin</h1>
<div className='input-box-admin'>
<div className='row'>
  <div className='col'> 
  <div class="logo-container">
  <img src={logo1} alt="Logo" class="logo" id="glow-logo" style={{ maxWidth: '300px', marginLeft: 3 }} />
  </div></div>
  <div className='col'>
    <div className='form'>
      <div className='mb-3'>
        <br></br>
        <br></br>
        <label htmlFor=''>Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        {/* <div className='mb-3'>
          Don't have an account? <Link to='/register'>Register here</Link>
        </div> */}
        <button onClick={AdminLoginAuth} className='btn btn-success'>
          Login
        </button>
      </div>
    </div>
  </div>
  {/* <div className='col'> <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} /></div> */}
</div>
      </div>
      
    </div>

</div>
    
  )
}

export default AdminLogin
