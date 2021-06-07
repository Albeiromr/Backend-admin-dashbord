import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config({path: `${__dirname}/../../.env`});

export const connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_DATABASE,
});



  