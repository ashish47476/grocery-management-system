import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerCustomer as registerCustomerApi } from '../services/customer'
import v1 from "../videos/v1.mp4"
import logo1 from '../images/lnbg.png'

function RegisterCustomer() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

 // // get the navigation object
  const navigate = useNavigate()

  const registerCustomer = async () => {
    if (firstName.length == '') {
      toast.error('Please enter first name')
    } else if (lastName.length == '') {
      toast.error('Please enter last name')
    } else if (email.length == '') {
      toast.error('Please enter email')
    } else if (phone.length == '') {
      toast.error('Please enter mobile')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } else {
      // call register api
      const response = await registerCustomerApi(
        firstName,
        lastName,
        email,
        password,
        phone
        
      )

      // //parse the response
      // if (response['status'] === 'success') {

      if (response) {
        toast.success('Successfully registered a new user')

      //  // go back to login
        navigate('/')
      } else {
        toast.error('Error while registering a new user, please try again')
      }
    }
  }

  return (
    <div>
     {/* <br></br> */}
     {/* <br></br>
     <br></br> */}
      <video autoPlay loop muted className="video-background">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="white-text"><h1 style={{ textAlign: 'center', margin: 10 }}>Register Customer</h1></div>
      <br></br>
<div className='input-box-customer'>
      <div className='row'>
      <div className='col'> <div class="logo-container-customer-register">
  <img src={logo1} alt="Logo" class="logo" id="glow-logo" style={{ maxWidth: '300px', marginLeft: 3 }} />
  </div></div>
        <div className='col'>
          <div className='form'>
            <br></br>
            <div className='white-text'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>
                
            <div className='white-text'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

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
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                onChange={(e) => {
                  setPhone(e.target.value)
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
              <label htmlFor=''>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <div className='white-text'>
                Already got an account? <Link to='/'>Login here</Link>
              </div>
              <br></br>
              <button onClick={registerCustomer} className='btn btn-success'>
                Register
              </button>
            </div>
          </div>
        </div>
        {/* <div className='col'></div> */}
      </div>
    </div>
    </div>
  )
}

export default RegisterCustomer
