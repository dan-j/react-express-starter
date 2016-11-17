import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send([{
    email: 'dan@me.com',
  }, {
    email: 'you@me.com',
  }]);
});

export default router;
