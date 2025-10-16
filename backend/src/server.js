// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';



dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);



app.listen(PORT, () => console.log('Server is running...' + PORT));