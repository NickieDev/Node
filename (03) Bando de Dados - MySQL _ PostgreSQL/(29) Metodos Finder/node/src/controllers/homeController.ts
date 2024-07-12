import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {

    /*let usuario = await User.findOne({
        // where: {
        //     id: 1
        // }
        where: {
            age: {
                [Op.gt]: 18
            }
        }
    })*/

    /*let usuario = await User.findByPk(1) // Achar pelo ID 
    
    if(usuario) {
        console.log(`O usuário ${usuario.name} possui ${usuario.age}`)
    }else {
        console.log('Usuário não encontrado')
    }*/

    const [usuario, created] = await User.findOrCreate({
        where: { name: 'Law' },
        defaults: {
            // name: 'Kaido', // Quando o elemento não existir ele cria com o nome expedificado no WHERE
            age: 22
        }
    })
    if(created) {
        console.log('Usuario criado com sucesso!')
    } else {
        console.log('Achamos o usuário.')
    }
    console.log('Nome: ' + usuario.name)

    // console.log('Usuario', usuario)
    // console.log('Created', created)

    let users = await User.findAll()

    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
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

export const novoUsuario = async (req: Request, res: Response) => {
    const { name, age } = req.body

    if (name !== '') {
        parseInt(age)
        const newUser = User.build({
            name,
            age
        })
        await newUser.save()
    }

    res.redirect('/')
}