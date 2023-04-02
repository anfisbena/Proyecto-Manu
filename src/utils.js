import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirName= dirname(fileURLToPath(import.meta.url));

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,`${__dirName}/public/images`)
  },filename:(req,file,cb)=>{
    cb(null,`${Date.now()}-${file.originalname}`)
  }
});

export const UploadFiles=multer({storage:storage});
export default __dirName;