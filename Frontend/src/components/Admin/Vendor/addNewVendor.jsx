import { useState } from "react";
import { toast } from 'react-toastify'
import {registerVendor} from '../../../services/vendor'
import { useNavigate } from 'react-router-dom'
import "../../../styles.css"

 function AddVendor() {

    // const [vendorId ,setVendorId] = useState('')

    const navigate = useNavigate()

    const [fname ,setFname] = useState('')
    const [lname ,setLname] = useState('')

    const [email ,setEmail] = useState('')

    const [password ,setPassword] = useState('')

    const [mobile ,setMobile] = useState('')

    const saveVendor = async () =>{
        //   if (vendorId.length == '') {
        //   toast.error('Please enter Vendor Id')
        // } else 
        if (fname.length == '') {
          toast.error('Please enter First Name')
        } 
        else if (lname.length == '') {
          toast.error('Please enter Last Name')
        } 
        else if (email.length == '') {
          toast.error('Please enter Email')
        }
        else if (password.length == '') {
          toast.error('Please enter password')
        }  
        else if (mobile.length == '') {
          toast.error('Please enter Mobile')
        }
        else{
          const response = await registerVendor(fname,lname,email,password,mobile)

          if(response){
            toast.success('Vendor Added Successfully !!!')
          }
          navigate('/vendorList')
        } 
    }

    return ( 
      <>
        <div className="background-container1">
          <br></br>
          <br></br>
          <br></br>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        {/* <div className="mb-3">
                            <label htmlFor="">VendorID</label>
                                 <input
                                    type='text'
                                    className='form-control'
                                    onChange={(e) => {
                                    setVendorId(e.target.value)
                                    }}
                                />
                        </div> */}
                          <div className="mb-3">
                            <label htmlFor="">First Name</label>
                                 <input
                                    type='text'
                                    className='form-control'
                                    onChange={(e) => {
                                    setFname(e.target.value)
                                    }}
                                />
                        </div>
                          <div className="mb-3">
                            <label htmlFor="">Last Name</label>
                                 <input
                                    type='text'
                                    className='form-control'
                                    onChange={(e) => {
                                    setLname(e.target.value)
                                    }}
                                />
                        </div>
                          <div className="mb-3">
                            <label htmlFor="">Email</label>
                                 <input
                                    type='email'
                                    className='form-control'
                                    onChange={(e) => {
                                    setEmail(e.target.value)
                                    }}
                                />
                        </div>
                          <div className="mb-3">
                            <label htmlFor="">Password</label>
                                 <input
                                    type='password'
                                    className='form-control'
                                    onChange={(e) => {
                                    setPassword(e.target.value)
                                    }}
                                />
                        </div>
                          <div className="mb-3">
                            <label htmlFor="">Mobile</label>
                                 <input
                                    type='tel'
                                    className='form-control'
                                    onChange={(e) => {
                                    setMobile(e.target.value)
                                    }}
                                />
                        </div >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={saveVendor} className='btn btn-primary'>
                                              Save
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
        <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
        <div>    </div>
         <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
</nav>
</>
     );
}

export default AddVendor;






















// import { useState } from "react";
// import { toast } from 'react-toastify'
// import {registerVendor} from '../../../services/vendor'
// import { useNavigate } from 'react-router-dom'

//  function AddVendor() {

//     // const [vendorId ,setVendorId] = useState('')

//     const navigate = useNavigate()

//     const [fname ,setFname] = useState('')
//     const [lname ,setLname] = useState('')

//     const [email ,setEmail] = useState('')

//     const [password ,setPassword] = useState('')

//     const [mobile ,setMobile] = useState('')

//     const saveVendor = async () =>{
//         //   if (vendorId.length == '') {
//         //   toast.error('Please enter Vendor Id')
//         // } else 
//         if (fname.length == '') {
//           toast.error('Please enter First Name')
//         } 
//         else if (lname.length == '') {
//           toast.error('Please enter Last Name')
//         } 
//         else if (email.length == '') {
//           toast.error('Please enter Email')
//         }
//         else if (password.length == '') {
//           toast.error('Please enter password')
//         }  
//         else if (mobile.length == '') {
//           toast.error('Please enter Mobile')
//         }
//         else{
//           const response = await registerVendor(fname,lname,email,password,mobile)

//           if(response){
//             toast.success('Vendor Added Successfully !!!')
//           }
//           navigate('/vendorList')
//         } 
//     }

//     return ( 
//         <div>
//             <div className="row">
//                 <div className="col"></div>
//                 <div className="col">
//                     <div className="form">
//                         {/* <div className="mb-3">
//                             <label htmlFor="">VendorID</label>
//                                  <input
//                                     type='text'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setVendorId(e.target.value)
//                                     }}
//                                 />
//                         </div> */}
//                           <div className="mb-3">
//                             <label htmlFor="">First Name</label>
//                                  <input
//                                     type='text'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setFname(e.target.value)
//                                     }}
//                                 />
//                         </div>
//                           <div className="mb-3">
//                             <label htmlFor="">Last Name</label>
//                                  <input
//                                     type='text'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setLname(e.target.value)
//                                     }}
//                                 />
//                         </div>
//                           <div className="mb-3">
//                             <label htmlFor="">Email</label>
//                                  <input
//                                     type='email'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setEmail(e.target.value)
//                                     }}
//                                 />
//                         </div>
//                           <div className="mb-3">
//                             <label htmlFor="">Password</label>
//                                  <input
//                                     type='password'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setPassword(e.target.value)
//                                     }}
//                                 />
//                         </div>
//                           <div className="mb-3">
//                             <label htmlFor="">Mobile</label>
//                                  <input
//                                     type='tel'
//                                     className='form-control'
//                                     onChange={(e) => {
//                                     setMobile(e.target.value)
//                                     }}
//                                 />
//                         </div>
//                         <button onClick={saveVendor} className='btn btn-primary'>
//                             Save 
//                         </button>
//                     </div>
//                 </div>
//                 <div className="col"></div>
//             </div>
//         </div>
//      );
// }

// export default AddVendor;