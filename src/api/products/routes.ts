import express from 'express';
import {postNewProduct, getProductFamily, getIndividualProduct} from './controller';


export const router = express.Router();

router.get("/product/:sku", getIndividualProduct);
router.get("/productFamily/:family", getProductFamily);
router.post("/", postNewProduct);
