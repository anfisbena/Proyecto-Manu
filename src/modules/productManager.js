import Products from '../models/product.model.js'

const defaultFunction=()=>{'please provide a function to handle the error'}

export const GetProducts=async()=>{
    try{
      const products=await Products.find();
      console.log(products)
      return products;
    }
    catch(err){console.log(err)}
  }
  
export const AddProducts=async(title,description,price,code,stock,thumbnails)=>{
    try{
      let newProduct={
        title:title,
        description:description,
        price:price,
        code:code,
        stock:stock,
        thumbnails:thumbnails
      }
      await Products.create(newProduct)
      return {status:200,result:'success',payload:'producto agregado'}
    }
    catch(err){console.log(err)}
  }

export default defaultFunction;
