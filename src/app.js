import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {engine} from 'express-handlebars';
import productRouter from './routers/product.router.js'; 
import __dirName from './utils.js';

dotenv.config();
let USER=process.env.DB_USER;
let PASS=process.env.DB_PASSWORD;

const app=express();
const PUERTO=8080;
const httpserver=app.listen(PUERTO,()=>console.log(`Servidor nuevo escuchando en  http://localhost:${PUERTO}`));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirName}/public`));

app.engine('handlebars',engine())
app.set('views',`${__dirName}/views`)
app.set('view engine','handlebars')


app.use('/',productRouter)



mongoose.connect(`mongodb+srv://${USER}:${PASS}@cluster0.bsrdbik.mongodb.net/?retryWrites=true&w=majority`)