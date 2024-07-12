import { Router } from 'express';
import { createUser, createUsers, getAllUsers } from '../services/user';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/test', (req, res) => {
    res.json({ test: true });
})

mainRouter.post('/user', async (req, res) => {
    // const user = await createUser('Kaido', 'shanks@email.com')
    const user = await createUser({
        name: 'Test',
        email: 'test@email.com',
        posts: {
            create: {
                title: 'Title test',
                body: 'Body Test'
            }
        }
    })

    if (user) {
        res.status(201).json({ user })
    } else {
        res.status(500).json({ error: 'Ocorreu um erro.' })
    }
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'Kaido', email: 'kaido@email.com' },
        { name: 'Bigmon', email: 'bigmon@email.com' },
        { name: 'Luffy', email: 'luffy@email.com' }
    ])

    res.json({ result })
})

mainRouter.get('/users', async (req, res) => {
    const result = await getAllUsers()

    res.json({ result })
})