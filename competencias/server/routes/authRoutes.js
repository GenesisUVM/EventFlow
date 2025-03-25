import {Router} from "express"
import {registro, login, logout} from '../controlers/authControlers.js'
import {competencia, datosCompetencia} from '../controlers/authCompetencias.js'
import {registroCompetencias, datosRegisrosCompetencia} from '../controlers/authRegistrosComp.js'
import {tiempo, datosGanadores} from '../controlers/authTiempos.js'

const router = Router()

router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/competencia' , competencia)
router.post('/registroCompetencia' , registroCompetencias)
router.get('/datosCompetencia' , datosCompetencia)
router.get('/datosRegisrosCompetencia' , datosRegisrosCompetencia)
router.post('/registroTiempo' , tiempo)
router.get('/datosGanadores' , datosGanadores)

export default router