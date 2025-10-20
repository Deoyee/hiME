// const express = require('express');

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from "cors";


import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js';


dotenv.config();

const app = express();

const PORT = ENV.PORT || 4000;

const __dirname = path.resolve();

app.use(express.json());  //req.body
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);


// for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
    })
}

app.listen(PORT, () => {
    console.log('Server is running...' + PORT);
    connectDB();
});