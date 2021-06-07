import express from 'express';
import {router as products} from '../api/products/routes';
import {router as administrator} from '../api/Administrator/routes';

export const router = express.Router();

router.use("/products", products);
router.use("/administrator", administrator);


