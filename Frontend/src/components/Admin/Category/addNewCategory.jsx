import { useState } from "react";
import { registerCategory } from '../../../services/category'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function AddCategory() {

    const [categoryDesc , setCategoryDesc] = useState('')
    const [categoryName , setCategoryName] = useState('')

    const navigate = useNavigate()

    const saveCategory = async () =>{
        //   if (vendorId.length == '') {
        //   toast.error('Please enter Vendor Id')
        // } else 
        if (categoryName.length == '') {
          toast.error('Please enter Category Name')
        } 
        else if (categoryDesc.length == '') {
          toast.error('Please enter Category Description')
        } 
        else{
          const response = await registerCategory(categoryName,categoryDesc)

          if(response){
            toast.success('Category Added Successfully !!!')
          }
          navigate('/categoryList')
        } 
    }

    return ( 
        <>
        <div>
            <div className='row' style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col"></div>
                        <div className="col">
                            <div className="form">
                                <div className="mb-3">
                                    <label htmlFor="">Category Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            onChange={(e) => {
                                                setCategoryName(e.target.value)
                                            }}
                                        />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Category Description</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            onChange={(e) => {
                                                setCategoryDesc(e.target.value)
                                            }}
                                        />
                                </div>
                                <button onClick={saveCategory} className='btn btn-primary'>
                                Save 
                            </button>
                            </div>
                        </div>
                    <div className="col"></div>

                </div>
            </div>

        </div>
              <nav className='navbar navbar-expand-sm bg-success navbar-dark sticky-top' >
              <div>    </div>
               <div style={{ textAlign: 'center'}}>GroceryBuddy. ©2024. All Rights Reserved</div> 
      </nav>
        </>
     );
}

export default AddCategory;