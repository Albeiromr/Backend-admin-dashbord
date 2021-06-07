import express from 'express';
import { connection } from "../../database/database";
import { MysqlError } from "mysql";

export function getIndividualAdministrator (req: express.Request, res: express.Response) {
  connection.query(`SELECT password FROM ecommerce.adminUser WHERE username='${req.params.username}'`,
  (error:MysqlError, results, fields) => {
  if (error) res.send(error);
  res.send(results);
  });
}