import { authController, loginController } from '../controller/AuthController.js';
import express from 'express';


const routes = express.Router();

// posting User
routes.post('/register', authController );
routes.post('/login', loginController );





export default routes;