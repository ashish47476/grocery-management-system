// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import './Login.css';

// function LoginUser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); 

//   const navigate = useNavigate();

//   const onLogin = async (e) => {
//     e.preventDefault(); 

//     if (email.length === 0) {
//       toast.warning("Enter email");
//     } else if (password.length === 0) {
//       toast.warning("Enter password");
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8080/users/login', {
//           email, password
//         });

//         if (response && response.data) {
//           const { role } = response.data; 

//           if (response.status === 200) {
//             if (role === 'ROLE_ADMIN') {
//               navigate('/admindashboard'); 
//             } else if (role === 'ROLE_VENDOR') {
//               navigate('/vendordashboard'); 
//             } else if (role === 'ROLE_CUSTOMER') {
//               navigate('/'); 
//             } else {
//               setError('Invalid role'); 
//               toast.error('Invalid role'); 
//             }
//           } else {
//             setError('Login failed'); 
//             toast.error('Login failed');
//           }
//         } else {
//           setError('Invalid response structure'); 
//           toast.error('Invalid response structure');
//         }
//       } catch (error) {
//         console.error('Login failed:', error); 
//         setError('Invalid email or password'); 
//         toast.error('Invalid email or password'); 
//       }
//     }
//   };

//   return (
//     <div className="login-container">
      

//       <div className="form-container">
//         <form onSubmit={onLogin}>
//           <div className="form-group">
//           <h2 className="page-title"><center>Login</center></h2>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-actions">
//             <div className="register-link">
//               Don't have an account yet? <Link to="/register">Register here</Link>
//             </div>
//             <button type="submit" className="btn-login">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import './Login.css';

// function LoginUser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); 

//   const navigate = useNavigate();

//   const onLogin = async (e) => {
//     e.preventDefault(); 

//     if (email.length === 0) {
//       toast.warning("Enter email");
//     } else if (password.length === 0) {
//       toast.warning("Enter password");
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8080/users/login', {
//           email, password
//         });

//         if (response && response.data) {
//           const { user } = response.data; // Assuming the response contains user profile data

//           if (response.status === 200) {
//             sessionStorage.setItem('user', JSON.stringify(user)); // Save user profile data to sessionStorage

//             const { role } = user;

//             if (role === 'ROLE_ADMIN') {
//               navigate('/admindashboard'); 
//             } else if (role === 'ROLE_VENDOR') {
//               navigate('/vendordashboard'); 
//             } else if (role === 'ROLE_CUSTOMER') {
//               navigate('/'); 
//             } else {
//               setError('Invalid role'); 
//               toast.error('Invalid role'); 
//             }
//           } else {
//             setError('Login failed'); 
//             toast.error('Login failed');
//           }
//         } else {
//           setError('Invalid response structure'); 
//           toast.error('Invalid response structure');
//         }
//       } catch (error) {
//         console.error('Login failed:', error); 
//         setError('Invalid email or password'); 
//         toast.error('Invalid email or password'); 
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-container">
//         <form onSubmit={onLogin}>
//           <div className="form-group">
//             <h2 className="page-title"><center>Login</center></h2>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-actions">
//             <div className="register-link">
//               Don't have an account yet? <Link to="/register">Register here</Link>
//             </div>
//             <button type="submit" className="btn-login">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import './Login.css';

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault(); 

    if (email.length === 0) {
      toast.warning("Enter email");
    } else if (password.length === 0) {
      toast.warning("Enter password");
    } else {
      try {
        const response = await axios.post('http://localhost:8080/users/login', {
          email, password
        });

        // Log the entire response for debugging
        console.log('Login response:', response);

        if (response && response.data) {
          // Log the response data to ensure structure
          console.log('Response data:', response.data);

          // Extract all fields from the response data
          const userData = response.data;
          const { id, email, firstName, lastName, phoneNo, role } = userData;

          // Log all fields for debugging
          console.log('Extracted ID:', id);
          console.log('Extracted Email:', email);
          console.log('Extracted First Name:', firstName);
          console.log('Extracted Last Name:', lastName);
          console.log('Extracted Phone Number:', phoneNo);
          console.log('Extracted Role:', role);

          if (response.status === 200) {
            // Store the entire user data in session storage
            sessionStorage.setItem('user', JSON.stringify(userData)); 
            
            toast.success('Login successful');
            
            // Navigate based on role
            if (role === 'ROLE_ADMIN') {
              navigate('/admindashboard'); 
            } else if (role === 'ROLE_VENDOR') {
              navigate('/vendordashboard'); 
            } else if (role === 'ROLE_CUSTOMER') {
              navigate('/userdashboard'); 
            } else {
              setError('Invalid role'); 
              toast.error('Invalid role'); 
            }
          } else {
            setError('Login failed'); 
            toast.error('Login failed');
          }
        } else {
          setError('Invalid response structure'); 
          toast.error('Invalid response structure');
        }
      } catch (error) {
        console.error('Login failed:', error); 
        setError('Invalid email or password'); 
        toast.error('Invalid email or password'); 
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={onLogin}>
          <div className="form-group">
            <h2 className="page-title"><center>Login</center></h2>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="form-actions">
            <div className="register-link">
              Don't have an account yet? <Link to="/register">Register here</Link>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;



// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import './Login.css';

// function LoginUser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); 

//   const navigate = useNavigate();

//   const onLogin = async (e) => {
//     e.preventDefault(); 

//     if (email.length === 0) {
//       toast.warning("Enter email");
//     } else if (password.length === 0) {
//       toast.warning("Enter password");
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8080/users/login', {
//           email, password
//         });

//         // Log the entire response for debugging
//         console.log('Login response:', response);

//         if (response && response.data) {
//           // Log the response data to ensure structure
//           console.log('Response data:', response.data);

//           // Store the entire response data in session storage
//           sessionStorage.setItem('user', JSON.stringify(response.data)); 
//           toast.success('Login successful');

//           // Extract role from response data
//           const { role } = response.data;

//           // Navigate based on role
//           if (role === 'ROLE_ADMIN') {
//             navigate('/admindashboard'); 
//           } else if (role === 'ROLE_VENDOR') {
//             navigate('/vendordashboard'); 
//           } else if (role === 'ROLE_CUSTOMER') {
//             navigate('/'); 
//           } else {
//             setError('Invalid role'); 
//             toast.error('Invalid role'); 
//           }
//         } else {
//           setError('Invalid response structure'); 
//           toast.error('Invalid response structure');
//         }
//       } catch (error) {
//         console.error('Login failed:', error); 
//         setError('Invalid email or password'); 
//         toast.error('Invalid email or password'); 
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-container">
//         <form onSubmit={onLogin}>
//           <div className="form-group">
//             <h2 className="page-title"><center>Login</center></h2>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-actions">
//             <div className="register-link">
//               Don't have an account yet? <Link to="/register">Register here</Link>
//             </div>
//             <button type="submit" className="btn-login">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;
