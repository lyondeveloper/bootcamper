const express = require('express');

const {
  getBootcamps,
  getSingleBootcamp,
  createBootcamp,
  editBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:slug')
  .get(getSingleBootcamp)
  .put(editBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
