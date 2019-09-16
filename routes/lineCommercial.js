const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('hello', {
    msg: 'Hello Autoline!!'
  });
});

module.exports = router;