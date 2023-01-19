const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = 3001;

// Middleware/static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listen for PORT 3001
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
