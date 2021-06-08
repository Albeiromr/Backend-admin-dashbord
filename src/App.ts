import express from 'express';
import {router} from './routes/index';
import cors from 'cors';

const app = express();

app.use('/static',express.static(`${__dirname}/public/thumbnail`));
app.use('/static',express.static(`${__dirname}/public/bigImg`));
app.use(express.json());
app.use(cors())


app.use("/api", router);




export default app;





