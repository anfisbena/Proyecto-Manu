import {Router} from 'express';
import {UploadFiles } from '../utils.js';

import {GetProducts,AddProducts} from '../modules/productManager.js'
import {ErrorUploadFile} from '../modules/errorHandler.js'

const router = Router();


router.get ('/',async (req,res)=>{
  try{
    let response=await GetProducts();
    if(!response){return res.status(400).send({result:'error',payload:'no se pudieron obtener los productos'})}
    return res.status(200).send({result:'sucess',payload:response})
  }
  catch(err){console.log(err)}
})

router.post('/',UploadFiles.array('thumbnails',3),async (req,res)=>{
  try{
    let {title,description,price,code,stock}=req.body;
    let thumbnails=req.files.map((file)=>file.filename)
    let errorHandler=await ErrorUploadFile(title,description,price,code,stock,thumbnails);
    if(errorHandler){return res.status(errorHandler.status).send({status:errorHandler.status,payload:errorHandler.payload})}
      let response=await AddProducts(title,description,price,code,stock,thumbnails)
      return res.status(response.status).send({status:response.status,payload:response.payload})
  }
  catch(err){console.log(err)}
})


router.put('/',(req,res)=>{})
router.delete('/',(req,res)=>{})

export default router;