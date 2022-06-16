import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

const router = Router()

export default router.get('/test', (req:Request, res:Response)=>{
    res.status(200).send('api esta funcionando normal')
}).post('/movie', createMovie)