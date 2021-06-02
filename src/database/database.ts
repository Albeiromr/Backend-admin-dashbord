import mysql from 'mysql';

export const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0710',
  database : 'ecommerce'
});



  