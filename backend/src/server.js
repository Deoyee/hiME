// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';



dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

const __dirname = path.resolve();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

// for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.hml"))
    })
}

app.listen(PORT, () => console.log('Server is running...' + PORT));