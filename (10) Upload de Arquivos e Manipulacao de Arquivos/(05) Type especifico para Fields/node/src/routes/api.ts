import { Router } from "express";
import multer from 'multer'

import  * as ApiController from '../controllers/apiController'

const upload = multer({
   dest: './tmp' // Destino do envio
})

const router = Router()

router.get('/ping', ApiController.ping)

router.get('/random', ApiController.random)

router.get('/nome/:nome', ApiController.nome)

router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.listPhrases)
router.get('/frase/aleatoria', ApiController.randomPhrase)
router.get('/frase/:id', ApiController.getPhrase)
router.put('/frase/:id', ApiController.updatePhrase)
router.delete('/frase/:id', ApiController.deletePhrase)

router.post('/upload', upload.fields([
   { name: 'avatar', maxCount: 1 },
   { name: 'gallery', maxCount: 3 }
]), ApiController.uploadFile)
   // .single('CAMPO') = Apenas 1 arquivo
   // .array('CAMPO', LIMIT) = Mais de 1 arquivo com limite
      // .array('avatars', 2)
   // .fields( [ { CAMPO, MAXCOUNT } ] ) = Quando se envia diferentes arquivos


export default router