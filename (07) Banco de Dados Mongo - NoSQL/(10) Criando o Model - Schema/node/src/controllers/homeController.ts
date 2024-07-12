import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async(req: Request, res: Response) => {
    let usuarios = await User.find({})
    console.log('Usuários: ', usuarios)

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Nick',
        lastName: 'Suzuki',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};