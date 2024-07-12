import { Router } from 'express';
import { prisma } from '../libs/prisma';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/test', (req, res) => {
    res.json({ test: true });
})

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'Shanks',
            email: 'shanks@email.com'
        }
    })

    res.json({ user })
})