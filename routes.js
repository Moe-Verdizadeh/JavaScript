const express = require('express');
const app = express();

// import our page routes
const pageRoutes = require('./routes/pages');
const blogsRoutes = require('./routes/blogs');
app.use ('/', pageRoutes);
app.use ('/blogs', blogsRoutes);

//export the changes
module.exports = app;