import { createUrl,log} from "../utils/utils";
import axios from "axios";


export async function getCategoryList() {
    const url = createUrl('/categories')

    try{
        console.log("in get category list")

        const header = {
            headers: {
              //token,
            },
          }
  
          const response = await axios.get(url, header)
          log(response.data)
          return response
    }catch (ex){
        log(ex)
        return null
    }
}

export async function registerCategory(categoryName,categoryDesc){
    const url = createUrl('/categories')
    const body = {
        categoryName,
        categoryDesc
    }

    try{
        const response = await axios.post(url,body)
        console.log(response)
        return response
      } catch(ex){
        console.log(ex)
        return null
      }

}