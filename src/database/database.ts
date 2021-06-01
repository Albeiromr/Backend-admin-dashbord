import mysql from 'mysql';

export const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0710',
  database : 'ecommerce'
});

connection.query("SELECT price FROM ecommerce.products;", function (error, results, fields) {
    if (error) throw error;
    console.log( results[0].price + results[1].price);
  });

  