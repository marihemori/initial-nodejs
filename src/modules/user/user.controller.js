import { Router } from 'express';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', function (req, res) {
  res.send('User controller');
});

export default userRouter;
