import { Router } from 'express';
import { createUser } from '../services/user';

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

    res.json({ user })
})