
import {config} from 'dotenv';
import {app} from './app.js'
import http from 'http'
import { database } from './src/config/database.js';

config()

database()


const PORT = process.env.PORT || 3002
http.createServer(app).listen(PORT, ()=> console.log('server runing port number', PORT))
