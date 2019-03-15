import express from 'express';
import { getData } from './route1';
import { getResponse, sendResponse } from '../../util/middleware';

const router = express.Router();

router.get('/', getResponse(getData), sendResponse);

export default router;
