import { Link } from "react-router-dom";


function ProfileCustomer() {
    const customer = sessionStorage.getItem('firstName')
    return(
        <div>
            <h2>Hello {customer}</h2>
            <div className='mb-3'>
                Update an account <Link to='/updateCustomer'>Update here</Link>
              </div>
        </div>
    )
}
export default ProfileCustomer;