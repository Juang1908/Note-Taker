const express = require('express');
const path = require('path');
const apiRoutes = require('./helpers/apiRoutes');
const htmlRoutes = require('./helpers/htmlRoutes');
// const fs = require('fs');  // ?
// const uuid = require('uuid'); //?

const app = express();
const PORT = 3001;

// Middleware/static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/Develop/public')));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listen for PORT 3001
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
