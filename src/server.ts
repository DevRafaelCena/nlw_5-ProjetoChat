import express from 'express';

import "./database"
import {routes} from './routes'


let port = 2222


const app = express();

app.use(express.json())
app.use(routes)

app.listen(port,()=>{console.log("Server is running on port " + port )})