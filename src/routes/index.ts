import express from 'express';
import {router as products} from '../api/products/routes';

export const router = express.Router();

router.use("/products", products);

