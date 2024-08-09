import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCustomerById, updateCustomer as updateCustomerApi } from '../services/customer'


function UpdateCustomer() {
  const [customerId,setCustomerId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

 // // get the navigation object
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("in component did mount");
    fetchDetailsOfCustomer()
  },[])

  const fetchDetailsOfCustomer = async () =>{
    const response =await getCustomerById(sessionStorage.getItem('customerId'))
    debugger
      if(response.data !=null){
        console.log("in the Customer profile edit ");
        console.log(response)
        setCustomerId(sessionStorage.getItem(('customerId')))
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setPassword(response.data.password)
        
      }
      else{
        toast.error('Error while calling get /Customer/customerId api')
      }
  }

  const updateUser = async () => {
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
      const response = await updateCustomerApi(
        customerId,
        firstName,
        lastName,
        email,
        password,
        phone
        
      )

      // //parse the response
      // if (response['status'] === 'success') {

      if (response) {
        toast.success('Successfully updated  user')

      //  // go back to login
        navigate('/product-gallery')
      } else {
        toast.error('Error while registering a new user, please try again')
      }
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Update Profile</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                className='form-control'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                className='form-control'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <button onClick={updateUser} className='btn btn-success'>
                Update
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default UpdateCustomer
