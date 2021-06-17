import express from 'express';
import path from 'path';
import {router} from './routes/index';
import cors from 'cors';

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static',express.static(`${__dirname}/public/thumbnail`));
app.use('/static',express.static(`${__dirname}/public/bigImg`));
app.use(express.json());
app.use(cors())


app.use("/api", router);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});



export default app;





