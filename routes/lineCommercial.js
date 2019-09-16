const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('lineCommercial', {
    msg: 'Hello Autoline!!'
  });
});

module.exports = router;