import { Request, Response } from 'express';

import User from '../models/User';

export const home = async(req: Request, res: Response) => { 
    /*await User.updateMany( // Atualiza todos que encontrar 
        { age: {$lte: 18} }, // Condição para achar
        { age: 18 } // O que sera alterado
    )*/
    /*await User.updateOne(  // Atualiza apenas 1
        { email: 'law@op.com' },
        { age: 46 }
    )*/

    let law = await User.findOne( { email: 'law@op.com' } )
    if(law) {
        law.name.lastName = 'Silva'
        law.age = 47
        await law.save()
    }

    //let user = await User.FindOneAndUpdate() // Funciona com os mesmos parametros do findOne, mas aqui ele acha, atualiza e retorna para que o dado possa ser trabalhado. 

    let users = await User.find({}).sort({ 'name.firstName': 1 })

    res.render('pages/home', {
        users
    });
};