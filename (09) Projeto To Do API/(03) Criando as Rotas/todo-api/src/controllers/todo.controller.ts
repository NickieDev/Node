import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {

}

export const add = async (req: Request, res: Response) => {

}

export const update = async (req: Request, res: Response) => {
    const { id } = req.body
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.body
}

