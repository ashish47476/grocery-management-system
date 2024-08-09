import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVenProdctById, updateVendorProduct } from "../../services/vendor"
import { toast } from "react-toastify"
import "../../navbar.css"
import "../../styles.css"


function UpdateProduct() {
    // const [vendorProductId, setVendorProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [productMfgDate, setProductMfgDate] = useState('')
    const [productExpDate, setProductExpDate] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [pmanufacturer, setPmanufacturer] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [vendorId, setVendorId] = useState('')
    const [subCatId, setSubCatId] = useState('')

    const {productId} = useParams()
    // console.log('productIddddddddd')
    // console.log(productId)

    const navigate = useNavigate()

    useEffect(()=>{
        fetchDetailsofProduct()
    },[])
 
    const fetchDetailsofProduct = async()=>{
        const response = await getVenProdctById(productId)
        if(response.data !=null){
            debugger
            
            // setVendorProductId(response.data.vendorProductId)
            setProductName(response.data.productName)
            setProductDesc(response.data.productDesc)
            setProductMfgDate(response.data.productMfgDate)
            setProductExpDate(response.data.productExpDate)
            setProductPrice(response.data.productPrice)
            setProductQuantity(response.data.productQuantity)
            setPmanufacturer(response.data.pmanufacturer)
            setCategoryId(response.data.categoryId)
            setVendorId(response.data.vendorId)
            setSubCatId(response.data.subCatId)
        }
        else{
            toast.error('Error while calling get vendorProduct api')
          }

    }

    const updateProdutToList =async()=>{
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
            const response = await updateVendorProduct(
                productId,productName,productDesc,productMfgDate,productExpDate,
                productPrice,productQuantity,pmanufacturer,categoryId,vendorId,subCatId)
       

        if(response){
            toast.success("Product updated successfully")

            navigate(`/vendorProducts/${vendorId}`)
        }
        else{
            toast.error('Error while adding product, please try again')
        }
    }
    }
    
    return ( 
      <div className="background-container4">
      <div className='input-box-admin'>
        <div className='row'>
          {/* <div className='col'></div> */}
          <div className='col'>
            <div className='form'>
            {/* <div className='mb-3'> */}
                {/* <label htmlFor=''>productName</label> */}
                {/* <input */}
                  {/* type='text' */}
                  {/* className='form-control' */}
                  {/* value={vendorProductId} */}
                  {/* onChange={(e)=>{ */}
                    {/* setVendorProductId(e.target.value) */}
                  {/* }} */}
                {/* /> */}
              {/* </div> */}
              <div className='mb-3'>
                <label htmlFor=''>productName</label>
                <input
                  type='text'
                  className='form-control'
                  
                  value={productName}
                  onChange={(e)=>{
                    setProductName(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor=''>productDesc</label>
                <input
                  type='text'
                  className='form-control'
                  value={productDesc}
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
                  value={productMfgDate}
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
                  value={productMfgDate}
                  onChange={(e) => {
                    setProductExpDate(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor=''>productPrice</label>
                <input
                  type='number'
                  className='form-control'
                  value={productPrice}
                  onChange={(e) => {
                    setProductPrice(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor=''>productQuantity</label>
                <input
                  type='number'
                  className='form-control'
                  value={productQuantity}
                  onChange={(e) => {
                    setProductQuantity(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor=''>pmanufacturer</label>
                <input
                  type='text'
                  className='form-control'
                  value={pmanufacturer}
                  onChange={(e) => {
                    setPmanufacturer(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor=''>categoryId</label>
                <input
                  type='number'
                  className='form-control'
                  value={categoryId}
                  onChange={(e) => {
                    setCategoryId(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor=''>vendorId</label>
                <input
                  type='number'
                  className='form-control'
                  value={vendorId}
                  onChange={(e) => {
                    setVendorId(e.target.value)
                  }}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor=''>subCatId</label>
                <input
                  type='number'
                  className='form-control'
                  value={subCatId}
                  onChange={(e) => {
                    setSubCatId(e.target.value)
                  }}
                />
              </div>
              
              <div className='mb-3'>
                <button onClick={updateProdutToList} className='btn btn-success'>
                  Update Product
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

export default UpdateProduct;