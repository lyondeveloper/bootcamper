const express = require('express');

const {
  getBootcamps,
  getSingleBootcamp,
  createBootcamp,
  editBootcamp,
  deleteBootcamp,
  getBootcampByLocation
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampByLocation);

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
