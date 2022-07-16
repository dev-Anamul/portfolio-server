const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const errorController = require('./controller/errorController');
const AppError = require('./utils/AppError');
const serviceRouter = require('./router/serviceRouter');
const educationRouter = require('./router/educationRouter');
const contactRouter = require('./router/contactRouter');
const categoryRouter = require('./router/categoryRouter');
const blogRouter = require('./router/blogRouter');
const pepoleRouter = require('./router/pepoleRouter');
const porfolioRouter = require('./router/portfolioRouter');
const pricingRouter = require('./router/pricingRouter');
const testimonialRouter = require('./router/testimonialRouter');
const tagRouter = require('./router/tagRouter');
const skillsRouter = require('./router/skillsRouter');

// ! initialize app
const app = express();

// * middleware stack
// ! use morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// ! cross origin resource sharing
app.use(
    cors({
        origin: '*',
    })
);

// ! body parser
app.use(express.json());

// ! serving static file
app.use(express.static(path.join(__dirname, 'public')));

// ! mounted router
app.use('/api/service', serviceRouter);
app.use('/api/education', educationRouter);
app.use('/api/contact', contactRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blog', blogRouter);
app.use('/api/pepole', pepoleRouter);
app.use('/api/portfolio', porfolioRouter);
app.use('/api/pricing', pricingRouter);
app.use('/api/testimonial', testimonialRouter);
app.use('/api/tag', tagRouter);
app.use('/api/skills', skillsRouter);

// ! global unhalder route handler
app.all('*', (req, _res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on thi server.`, 404));
});

// ! global error handler
app.use(errorController.globalHanlder);

// ! export app
module.exports = app;
