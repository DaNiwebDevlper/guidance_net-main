const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AdminRouter = require('./Routes/AdminRouter');
const ClientRouter = require('./Routes/ClientRouter');
const ServiceProviderRouter = require('./Routes/ServiceProviderRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth', AuthRouter);
app.use('/admin', AdminRouter);
app.use('/client', ClientRouter);
app.use('/serviceprovider', ServiceProviderRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

