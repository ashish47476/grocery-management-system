import { useState } from "react";
import { toast } from "react-toastify";
import { addVendorProducts } from "../../services/vendor";
import { useNavigate } from "react-router-dom";

function AddProduct() {

     
    const [productName, setProductName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productMfgDate, setProductMfgDate] = useState('')
    const [productExpDate, setProductExpDate] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [pmanufacturer, SetPmanufacturer] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [vendorId, setVendorId] = useState('')
    const [subCatId, setSubCatId] = useState('')

    const navigate = useNavigate()

    const addProdutToList = async()=>{
        if(productName.length == '')
        {toast.error('enter productName')}
        else if(productDesc.length == '')
        {toast.error('enter product desc')}
        else if(productExpDate =='')
        {toast.error('enter expDate')}
        else if(productMfgDate =='')
        {toast.error('enter mfg date')}
        else if(productPrice == '')
        {toast.error('enter price')}
        else if (productQuantity == '')
        {toast.error('enter quantity')}
        else if (pmanufacturer == '')
        {toast.error('enter manufacturer')}
        else if (categoryId == '')
        {toast.error('enter catId')}
        else if (vendorId == '')
        {toast.error('enter vendorId')}
        else if (subCatId == '')
        {toast.error('enter subCatId')}
        else{
            const response = await addVendorProducts(
                productName,productDesc,productMfgDate,productExpDate,
                productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId)
       

        if(response){
            toast.success("Product added successfully")

            // navigate('/vendorProducts')
            navigate(`/vendorProducts/${sessionStorage.getItem('vendorId')}`)

        }
        else{
            toast.error('Error while adding product, please try again')
        }
    }
    }

    return ( 
      <div className="background-container5">
         <div className='input-box-admin'>
        <div className='row'>
          {/* <div className='col'></div> */}
          <div className='col'>
            <div className='form'>
              <div className='mb-3'>
                {/* <label htmlFor=''>productName</label> */}
                <input
                  type='text'
                  className='form-control'
                  placeholder="ProductName"
                  onChange={(e)=>{
                    setProductName(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                {/* <label htmlFor=''>productDesc</label> */}
                <input
                  type='text'
                  className='form-control'
                  placeholder="productDesc"
                  onChange={(e) => {
                    setProductDesc(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor=''>MfgDate:</label>
                <input
                  type='date'
                  className='form-control'
                //   placeholder="productMfgDate"
                //   id="productMfgDate"
                  onChange={(e) => {
                    setProductMfgDate(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor='' >ExpDate: </label>
                <input
                  type='date'
                  className='form-control'
                //   placeholder="productExpDate"
                  onChange={(e) => {
                    setProductExpDate(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                {/* <label htmlFor=''>productPrice</label> */}
                <input
                  type='number'
                  className='form-control'
                  placeholder="productPrice"
                  onChange={(e) => {
                    setProductPrice(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                {/* <label htmlFor=''>productQuantity</label> */}
                <input
                  type='number'
                  className='form-control'
                  placeholder="productQuantity"
                  onChange={(e) => {
                    setProductQuantity(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                {/* <label htmlFor=''>pmanufacturer</label> */}
                <input
                  type='text'
                  className='form-control'
                  placeholder="pmanufacturer"
                  onChange={(e) => {
                    SetPmanufacturer(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                {/* <label htmlFor=''>categoryId</label> */}
                <input
                  type='number'
                  className='form-control'
                  placeholder="categoryId"
                  onChange={(e) => {
                    setCategoryId(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                {/* <label htmlFor=''>vendorId</label> */}
                <input
                  type='number'
                  className='form-control'
                  placeholder="vendorId"
                  onChange={(e) => {
                    setVendorId(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                {/* <label htmlFor=''>subCatId</label> */}
                <input
                  type='number'
                  className='form-control'
                  placeholder="subCatId"
                  onChange={(e) => {
                    setSubCatId(e.target.value)
                  }}
                />
              </div>
              
              <div className='mb-3'>
                <button onClick={addProdutToList} className='btn btn-success'>
                  Add Product
                </button>
              </div>
            </div>
          </div>
          {/* <div className='col'></div> */}
        </div>
        </div>
      </div>
);
}

export default AddProduct;