import express from 'express';
import {getIndividualAdministrator} from "./controller";

export const router =  express.Router();

router.get('/:username', getIndividualAdministrator);