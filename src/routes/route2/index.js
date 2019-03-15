import express from 'express';
import { getData } from './route2';
import { getResponse, sendResponse } from '../../util/middleware';

const router = express.Router();

router.get('/', getResponse(getData), sendResponse);

export default router;
