import express from 'express';
import {saveNewProduct} from './controller';


export const router = express.Router();

router.get("/", saveNewProduct);