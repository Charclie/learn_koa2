import KoaRouter from 'koa-router';
import hello from '../controllers/hello';
import getFile from '../controllers/file';
import { login, signin } from '../controllers/index';
import {
  insertUser,
  queryAllUser,
  updateUser,
  deleteUser,
} from '../controllers/user';

const router = new KoaRouter();

router.get('/hello/:name', hello);

router.get('/login', login);

router.post('/signin', signin);

// 文件服务
router.get('/getfile/:name', getFile);

router.post('/insertUser', insertUser);

router.get('/queryAllUser', queryAllUser);

router.post('/updateUser', updateUser);

router.post('/deleteUser', deleteUser);

export default router;
