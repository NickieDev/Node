import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

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
        name: 'Kaido',
        email: 'shanks@email.com'
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