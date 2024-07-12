import { Request, Response } from 'express';

import { sequelize } from '../instances/mysql';
// import { sequelize } from '../instances/pg';

import { Product } from '../models/Product';

export const home = async(req: Request, res: Response)=>{
    try {
        // Sequilize: ORM que permite manipuação/criação de dados, em um padrão que pode ser convertido para diferentes DB
        await sequelize.authenticate()
        console.log('Conexão estabelecida com Sucesso')
    } catch (error) {
        console.log('Deu problema: ', error)
    }

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