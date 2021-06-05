import express from 'express';
import {postNewProduct, getProductFamily, getIndividualProduct,putEditProduct, deleteIndividualProduct} from './controller';


export const router = express.Router();

router.get("/product/:sku", getIndividualProduct);
router.get("/productFamily/:family/:offset", getProductFamily);
router.post("/", postNewProduct);
router.put("/", putEditProduct);
router.delete("/product/:sku", deleteIndividualProduct);
