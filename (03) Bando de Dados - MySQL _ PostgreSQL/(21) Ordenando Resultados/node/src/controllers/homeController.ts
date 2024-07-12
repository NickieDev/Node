import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/user';

export const home = async(req: Request, res: Response)=>{
    let searchName: string = 'ka'

    let users = await User.findAll({
        // attributes: ['name', 'age' ]// Retornas os campos
        // attributes: { exclude: ['age'] } // Exclui campos
        //where: {  age: 45, name: 'BigMom' } // Condição
        where: { 
            /*[Op.or]: [ // Uma opção ou outra
                { age: 45 },
                { name: 'BigMom' }
            ]
            age: {
                [Op.or]: [30, 55]
            }
            [Op.or]: [
                { age: 55 },
                { age: 30 }
            ]*/
            //age: [ 55, 30, 60 ] // Retorna todos os valores

            /*age: {
                // Pode ir juntando e formando os AND na Query
                // [Op.gt]: 40, // > 40    // GT: Greather Than
                // [Op.gte]: 40, // >= 40  // E = Equal
                // [Op.lt]: 40, // < 40    // LT: Lower Than
                // [Op.lte]: 40, // <= 40
                // [Op.lte]: 70
                // [Op.between]: [40, 70]
                // [Op.notBetween]: [40, 70]
                //[Op.in]: [30, 55] || age: [30, 55] Entre os valores
                // [Op.notIn]: [30, 55]
            }*/

            /*name: {
                //[Op.like]: 'ka%' // Faz a busca com determinadas letras
                [Op.like]: `${searchName}%`
            }*/

            age: {
                [Op.gte]: 18
            }
        },
        order: [
            ['age', 'ASC'], // Crescente
            ['name', 'DESC'], // Decrecente
        ]
    });
    // console.log('Usuários: ', JSON.stringify(users))


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