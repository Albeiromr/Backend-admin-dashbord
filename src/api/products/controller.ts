import express from "express";
import { createProductInterface } from "./types";
import { connection } from "../../database/database";
import { MysqlError } from "mysql";

export function postNewProduct(req: express.Request, res: express.Response) {
  let productData: createProductInterface = req.body;

  connection.query(
    `INSERT INTO ecommerce.products (
            sku,
            productType,
            productName,
            productDescription,
            productPrice,
            productOldPrice,
            productStock,
            productRate,
            reviewQuantity,
            soldQuantity,
            productViews,
            sizeOne,
            sizeTwo,
            sizeThree,
            sizeFour,
            sizeFive,
            productImage,
            productThumbnail,
            categoryOne,
            categoryTwo,
            categoryThree,
            categoryFour,
            categoryFive,
            interestForYou,
            productProfit)
          VALUES (
            '${productData.sku}',
            '${productData.productType}',
            '${productData.productName}',
            '${productData.productDescription}',
            '${productData.productPrice}',
            '${productData.productOldPrice}',
            '${productData.productStock}',
            '${productData.productRate}',
            '${productData.reviewQuantity}',
            '${productData.soldQuantity}',
            '${productData.productViews}',
            '${productData.sizeOne}',
            '${productData.sizeTwo}',
            '${productData.sizeThree}',
            '${productData.sizeFour}',
            '${productData.sizeFive}',
            '${productData.productImage}',
            '${productData.productThumbnail}',
            '${productData.categoryOne}',
            '${productData.categoryTwo}',
            '${productData.categoryThree}',
            '${productData.categoryFour}',
            '${productData.categoryFive}',
            '${productData.interestForYou}',
            '${productData.productProfit}'  
          )`,
    (error: MysqlError, results, fields) => {
      if (error) res.send(error);
      res.send(results);
    }
  );
}

export function getProductFamily (req: express.Request, res: express.Response) {
  connection.query(`SELECT * FROM ecommerce.products Where productType='${req.params.family}'`,
  (error:MysqlError, results, fields) => {
    if (error) res.send(error);
    res.send(results);
  });
}

export function getIndividualProduct (req: express.Request, res: express.Response) {
  connection.query(`SELECT * FROM ecommerce.products Where sku='${req.params.sku}'`,
  (error:MysqlError, results, fields) => {
    if (error) res.send(error);
    res.send(results);
  });
}
