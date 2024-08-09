import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../../features/authSlice'
import Sidebar from '../Sidebar'
import { vendorLogin } from '../../services/vendor'
import v1 from "../../videos/v1.mp4"
import logo1 from '../../images/lnbg.png'


function VendorLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // // get the navigation object
  const navigate = useNavigate()

 // // get dispatcher object
  const dispatch = useDispatch()

  const VendorLoginAuth = async () => {
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
     // // call register api
      const response = await vendorLogin(email, password)

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
          const{vendorId,fname,role} = response.data
          // console.log("customerId--"+response.data.customerId )
          sessionStorage['vendorId']=vendorId
          sessionStorage['fname']=fname
          sessionStorage['role'] = role
          

       dispatch(login())                     //doubt

        // toast.success(`Welcome ${name} to store application`)
        toast.success(`Welcome ${fname} to grocery store `)
        // // go back to login
        navigate(`/vendorProducts/${vendorId}`)
      }
       else {
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

   <video autoPlay loop muted className="video-background">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  <div className="white-text"><h1 style={{ textAlign: 'center', margin: 10 }}>Vendor</h1></div>
 <div className='input-box-vendor'>
<div className='row'>
<div className='col'> <div class="logo-container-customer">
  <img src={logo1} alt="Logo" class="logo" id="glow-logo" style={{ maxWidth: '300px', marginLeft: 3 }} />
  </div></div>
  <div className='col'>
    <div className='form'>
      <br></br>
      <br></br>
      <div className='white-text'>
        <label htmlFor=''>Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className='white-text'>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className='white-text'>
        
        <button onClick={VendorLoginAuth} className='btn btn-success'>
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

export default VendorLogin
