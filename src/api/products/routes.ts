import express from 'express';
import {postProduct, getProductFamily} from './controller';


export const router = express.Router();

router.get("/productFamily/:family", getProductFamily);
router.post("/", postProduct);
