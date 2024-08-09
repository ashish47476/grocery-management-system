import {getCategoryList} from "../../../services/category"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from "react"


function CategoryList() {

    const [categories, setCategories] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        // get the list of vendors from server
        loadCategory()
      }, [])

    const loadCategory = async () =>{
        const response = await getCategoryList()

        console.log(response)
        if(response){
            setCategories(response['data'])
        }else {
            toast.error('Error while calling get /category api')
          }
    }

    const addCategory = () => {
        navigate('/addNewCategory')
    }


    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', margin: 10 }}>Category List</h1>
                    <div className='row' style={{ marginTop: 50 }}>
                        <div className="container">

                            <button onClick={addCategory} className='btn btn-primary'>
                                Add Category
                            </button>
                            <table className="table table-striped table-bordered table-hover table-responsive">
                                <tr>
                                <th>
                                        Category Id
                                    </th>
                                    <th>
                                        Category Name
                                    </th>
                                    <th>
                                        Category Description
                                    </th>
                                </tr>
                                <tbody>
                                    {categories.map((category) => {
                                        return (
                                            <tr>
                                                <td>
                                                    {category['categoryId']}
                                                </td>
                                                <td>
                                                    {category['categoryName']}
                                                </td>
                                                <td>
                                                    {category['categoryDesc']}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
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


export default CategoryList;