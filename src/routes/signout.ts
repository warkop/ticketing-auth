import express from 'express';

const router = express.Router();

router.delete('/api/users/signout', (req, res) => {
  req.session = null;

  res.send({});
});

// eslint-disable-next-line import/prefer-default-export
export { router as signoutRouter };
