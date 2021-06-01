import express from 'express';

export const saveNewProduct = (req:express.Request, res:express.Response) => {
    res.send('router funcionando');
};