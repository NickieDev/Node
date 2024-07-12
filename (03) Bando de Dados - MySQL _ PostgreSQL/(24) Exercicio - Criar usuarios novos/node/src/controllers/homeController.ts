import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { underscoredIf } from 'sequelize/types/utils';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async(req: Request, res: Response) => {
    // Build + Save: Serve para tratar os dados obtidos 
    /*const user = User.build({
        name: 'Barba Negra',
        age: 25
    })
    console.log('Nome do novo Usuário: ' + user.name)*/

    /*const user = User.build({ // So cria a instancia 
        name: 'Barba Negra'
    })
    // console.log('Nome: ' + user.name)
    // console.log('Idade: ' + user.age)
    await user.save() // Agora aqui sim salva no banco*/

    // const user = User.build({
    //     name: 'Katakuri'
    // })
    // let idade : number = 27
    // user.age = idade

    // await user.save()

    /*// Create
    const user = await User.create({ // Já cria e salva no banco
        name: 'Marcos',
        age: 39
    })
    console.log(`Nome: ${user.name}`)
    console.log(`Idade: ${user.age}`)*/

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