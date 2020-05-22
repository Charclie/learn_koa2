import KoaRouter from 'koa-router';
import hello from '../controllers/hello';
import getFile from '../controllers/file';
import { login, signin } from '../controllers/index';

const router = new KoaRouter();

router.get('/hello/:name', hello);

router.get('/login', login);

router.post('/signin', signin);

// 文件服务
router.get('/getfile/:name', getFile);

export default router;
