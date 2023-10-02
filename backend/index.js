require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: false});
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
});
database.once('connected', () => {
    console.log('Database Connected');
});

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
});

app.use("/v1",routes);
