const defaultFunction=()=>{'please provide a function to handle the error'}

export const ErrorUploadFile=(title,description,price,code,stock,thumbnails)=>{
  if(!title){return {status:400,result:'error',payload:'falta el titulo'}}
  if(!description){return {status:400,result:'error',payload:'falta la descripcion'}}
  if(!price){return {status:400,result:'error',payload:'falta el precio'}}
  if(!code){return {status:400,result:'error',payload:'falta el codigo'}}
  if(!stock){return {status:400,result:'error',payload:'falta el stock'}}
  if(!thumbnails.length){return {status:400,result:'error',payload:'falta las imagenes'}}
}

export default defaultFunction;