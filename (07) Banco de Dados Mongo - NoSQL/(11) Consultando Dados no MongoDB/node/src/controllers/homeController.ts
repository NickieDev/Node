import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async(req: Request, res: Response) => {
    // let usuarios = await User.find({}) // +1 registro

    /*let usuarios = await User.findOne({  // 1 Regitro
        email: 'teste@op.com'
    }) */

    //let usuarios = await User.findById('62e1def66b0e00aa138703f3')

    let usuarios = await User.find({
        // "name.firstName": 'Edward'
        // interests: 'Navegar' // O Mongo é inteligente e identifica os usuários com aquelas informações
        age: { $gt: 40, $lt: 60 } // Greater Then = Maior
    }) 

    /*gt = Greater Then = Maior
        gte = Greater Then or Equal = Maior ou Igual
        lt = Lower Then = Abaixo de
        lte = Lower Then or Equal = ABaixo de ou Igual*/

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