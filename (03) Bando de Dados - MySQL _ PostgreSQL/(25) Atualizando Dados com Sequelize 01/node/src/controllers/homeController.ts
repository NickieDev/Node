import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { underscoredIf } from 'sequelize/types/utils';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async(req: Request, res: Response) => {

    /*await User.update({ age: 18 }, {
        where: {
            age: {
                [Op.lt]: 18
            }
        }
    })*/
    // 1) Dados a serem alterados
    // 2) Condição para encontrar o(s) item(ns)
    await User.update({ name: 'Otosan Shirohige', age: 56 }, {
        where: {
            id: 4
        }
    })

    let users = await User.findAll()

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
        frasesDoDia: [],
        users
    });
};

export const novoUsuario = async(req: Request, res: Response) => {
    const { name, age } = req.body

    if(name !== '') {
        parseInt(age)
        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }  

    res.redirect('/')
}