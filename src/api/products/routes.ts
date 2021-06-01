import express from 'express';
import {postProduct} from './controller';


export const router = express.Router();

router.post("/", postProduct);