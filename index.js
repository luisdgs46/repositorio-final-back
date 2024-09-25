const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/db');

const userRouter = require('./routes/userRoutes');
const autosRouter = require('./routes/autosRoutes');

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', autosRouter);

app.listen(process.env.PORT, () => console.log('Servidor escuchando en el puerto ' + process.env.PORT))