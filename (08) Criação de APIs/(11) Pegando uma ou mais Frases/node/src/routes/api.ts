import { Router } from "express";

import  * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/ping', ApiController.ping)

router.get('/random', ApiController.random)

router.get('/nome/:nome', ApiController.nome)

router.post('/frases', ApiController.createPhase)
router.get('/frases', ApiController.listPhases)
router.get('/frase/:id', ApiController.getPhase)

export default router