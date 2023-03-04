import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.
get('/all', UserController.allUsers)
.post('/add', UserController.addUser);

export default router;
