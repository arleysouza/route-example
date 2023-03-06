import { Router, Request, Response } from "express";
import matematica from './matematica';
import data from './data';

const routes = Router();

routes.use("/date", data);
routes.use("/math", matematica);

routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
