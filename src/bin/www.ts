import app from '../App';
import dotenv from 'dotenv';

dotenv.config({path: `${__dirname}/../../.env`});



app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT}`);
});