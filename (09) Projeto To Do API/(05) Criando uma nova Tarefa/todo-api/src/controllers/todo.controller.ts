import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {
    const list = await Todo.findAll()

    res.json({ list })
}

export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        })
        
        // 201 => Deu certo, e houve inserção de dados
        res.status(201).json({ item: newTodo })  
    } else {
        res.json({ error: 'Dados não enviados' })
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.body
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.body
}

