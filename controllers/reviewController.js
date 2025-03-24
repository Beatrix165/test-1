const Review = require('../model/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllReview = factory.getAll(Review);
// exports.getAllReview = catchAsync(async (req, res, next) => {
//   let filter = {};
//   if (req.params.tourId) filter = { tour: req.params.tourId };
//   const reviews = await Review.find(filter);

//   res.status(200).json({
//     status: 'success',
//     results: reviews.length,
//     data: { reviews },
//   });
// });

exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.getReview = factory.getOne(Review);
exports.createReview = factory.CreateOne(Review);
// exports.createReview = catchAsync(async (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;

//   const newReview = await Review.create(req.body);

//   res.status(201).json({
//     status: 'success',
//     data: { review: newReview },
//   });
// });

exports.updateReview = factory.UpdateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
