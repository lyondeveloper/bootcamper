// @desc   Get All bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.json({ msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getSingleBootcamp = (req, res, next) => {
  res.json({ msg: `Show bootcamp ${req.params.id}` });
};

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.json({ msg: 'create bootcamp' });
};

// @desc    Edit bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.editBootcamp = (req, res, next) => {
  res.json({ msg: 'edit bootcamp ' });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.json({ msg: 'delete bootcamp' });
};
