const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connecttoDb = require('./db/db');
const cookieparser = require('cookie-parser');
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connecttoDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/users', userRoutes);

app.use('/captains', captainRoutes);

module.exports = app;