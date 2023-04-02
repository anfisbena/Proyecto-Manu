  import mongoose from 'mongoose';

  const productSchema=new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    code: String,
    stock: Number,
    thumbnails: Array
});

const products=mongoose.model('products', productSchema);
export default products;