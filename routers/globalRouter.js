import express from 'express';
import {
  mainPage,
  getHome,
  getCal,
  getTetris,
  getMachine,
  getMap,
  getRegister,
} from '../controllers/mainController';

const globalRouter = express.Router();

globalRouter.get('/', mainPage);
globalRouter.get('/home', getHome);
globalRouter.get('/cal', getCal);
globalRouter.get('/tetris', getTetris);
globalRouter.get('/machine', getMachine);
globalRouter.get('/map', getMap);
globalRouter.get('/register', getRegister);

export default globalRouter;
