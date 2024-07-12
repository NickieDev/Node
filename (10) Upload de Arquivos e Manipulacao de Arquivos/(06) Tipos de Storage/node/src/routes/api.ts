import { Router } from "express";
import multer from 'multer'

import  * as ApiController from '../controllers/apiController'

/*const storageConfig = multer.diskStorage({ // Diz onde armazenar
   destination: (req, file, cb) => {
      cb(null, './tmp')
   },
   filename: (req, file, cb) => {
      // cb(null, file.fieldname + '-' + Date.now())
      // cb(null, file.fieldname +'.jpg')
      let randomName = Math.floor(Math.random() * 99999)
      cb(null, `${randomName + Date.now()}.jpg`)
   }
}) */
//const storageConfig = multer.memoryStorage()

const upload = multer({
   // dest: './tmp' // Destino do envio
   //storage: storageConfig
   storage: multer.memoryStorage()
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

/*router.post('/upload', upload.fields([
   { name: 'avatar', maxCount: 1 },
   { name: 'gallery', maxCount: 3 }
]), ApiController.uploadFile)
   // .single('CAMPO') = Apenas 1 arquivo
   // .array('CAMPO', LIMIT) = Mais de 1 arquivo com limite
      // .array('avatars', 2)
   // .fields( [ { CAMPO, MAXCOUNT } ] ) = Quando se envia diferentes arquivos*/

router.post('/upload', upload.single('avatar'), ApiController.uploadFile)


export default router