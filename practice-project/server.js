const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const colors = require('colors');
colors.enable();

const cors = require('cors');
app.use(express.json(), cors());

const connectDb = require('./server/config/mongoose.config');
connectDb();

const authorRouter = require('./server/routes/author.routes');
app.use('/api/authors', authorRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(colors.rainbow(`Listening on port: ${PORT}`)));