// // import NavigationBar from "./navigationBar"
// import { useEffect, useState } from "react";
// import { getAddress, getCustomerById } from "../services/customer";
// import { log } from "../utils/utils";
// import { toast } from "react-toastify";
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
// import { useNavigate } from "react-router-dom";
// import { Button, Modal, Form } from 'react-bootstrap';
// function Profile() {
    
//     const [profile, setProfile] = useState([]);
//     const [address,setAddress ] = useState([]);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     // {address.adrLine1}  ,  {address.adrLine2} 
//     // {address.city}  {address.country} {address.zipCode}
    


    
    
//     const [showProfile, setProfileShow] = useState(false);
//     const handleProfileClose = () => setProfileShow(false);
//     const handleProfileShow = () => setProfileShow(true);
    
//     const [showAddress, setAddressShow] = useState(false);
//     const handleAddressClose = () => setAddressShow(false);
//     const handleAddressShow = () => setAddressShow(true);

//     const handleProfileSubmit = (e) => {
//       e.preventDefault();
//       // Process the form data (name and email) here
//       log("in profile edit---")
//       // console.log('Email:', email);
//       // // Close the modal
//       handleProfileClose();
//     };

//     const handleAddressSubmit = (e) => {
//       e.preventDefault();
//       // Process the form data (name and email) here
//       log("in address edit---")
//       // console.log('Email:', email);
//       // // Close the modal
//       handleAddressShow();
//     };

    
//   useEffect(() => {
//     loadProfile();
//     loadAddress();
//   }, []);

//   const loadProfile = async () => {
//     const response = await getCustomerById(sessionStorage.getItem('customerId'));
//     if (response['status'] === 200) {
//       setProfile(response.data);
//       log(response.data);
//     } else {
//       toast.error('Error while calling get /profile api');
//     }
//   };

//   const loadAddress = async () => {
//     const response = await getAddress(sessionStorage.getItem('customerId'));
//     if (response['status'] === 200) {
//       setAddress(response.data);
//       log(response.data);
//     } else {
//       toast.error('Error while calling get /Address api');
//     }
//   };

//     return (
      
//       <div    style={{backgroundColor:"ghostwhite",marginTop:60} }>
//       {/* <NavigationBar></NavigationBar> */}
        
//   <div className="container py-5">
   

//     <div className="row" style={{display:"flex"}}>
//       <div className="col-lg-4"></div>
//       <div className="col-lg-4" style={{marginTop:10}}>
//         {/* <div className="card mb-4" style={{justifyContent:"center"}}> */}
//           <div className=" text-center">
//             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: 170}}/>
//             <h4 className="my-3 " style={{fontFamily:"cursive"}}>{profile.firstName}</h4>
           
           
//           {/* </div> */}
//         </div>
//       </div>


//       <div style={{display:"flex"}}>
//       <div className="col-lg-5" style={{marginRight:100}}>
//         <div className="card mb-4">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Full Name</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{profile.firstName}  {profile.lastName}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Email</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{profile.email}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Mobile</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{profile.phone}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-4">
//               </div>
//               <div className="col-sm-1">
//               </div>
//               <div className="col-sm-1">
        
//               <button onClick={handleProfileShow} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
//         <EditNoteIcon fontSize="large" />
//       </button>
//               </div>
//               <div className="col-sm-4">
//               </div>
//             </div>
            
//           </div>
//         </div>

     
//       </div>
//       <div className="col-lg-5">
//         <div className="card mb-4">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Street</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{address.adrLine1}  ,  {address.adrLine2}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">City</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{address.city}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Country</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{address.country}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Zip code</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">{address.zipCode}</p>
//               </div>
//             </div>
//             <hr/>
//             <div className="row">
//               <div className="col-sm-4">
//               </div>
//               <div className="col-sm-1">
//               </div>
//               <div className="col-sm-1">
//               <button onClick={handleAddressShow} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
//         <EditLocationAltIcon fontSize="large" />
//       </button>
//               </div>
//               <div className="col-sm-4">
//               </div>
//             </div>
//             {/* <div className="row">
//               <div className="col-sm-3">
//                 <p className="mb-0">Address</p>
//               </div>
//               <div className="col-sm-9">
//                 <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
//               </div>
//             </div> */}
//           </div>
//         </div>
        
//       </div>
//       </div>
//     </div>
//   </div>
// {/* </section> */}





// <Modal show={showAddress} onHide={handleAddressClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Address</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

// {/*         
//         {address.adrLine1}  ,  {address.adrLine2} 
//         {address.city}  {address.country} {address.zipCode}
//         */}          
//           <Form onSubmit={handleAddressSubmit}>
//             <Form.Group controlId="inputName">
//               <Form.Label>Address Line 1</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your Address"
//                 value={address.adrLine1}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="inputName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={profile.lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="inputEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={profile.email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="inputEmail">
//               <Form.Label>Mobile</Form.Label>
//               <Form.Control
//                 type="phone"
//                 placeholder="Enter your Mobile No."
//                 value={profile.phone}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>

//         </Modal.Footer>
//       </Modal>




//       <Modal show={showProfile} onHide={handleProfileClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
          
//           <Form onSubmit={handleProfileSubmit}>
//             <Form.Group controlId="inputName">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={profile.firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="inputName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={profile.lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="inputEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={profile.email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="inputEmail">
//               <Form.Label>Mobile</Form.Label>
//               <Form.Control
//                 type="phone"
//                 placeholder="Enter your Mobile No."
//                 value={profile.phone}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>

//         </Modal.Footer>
//       </Modal>
//     </div>
        


//     )
//   }
  
//   export default Profile;