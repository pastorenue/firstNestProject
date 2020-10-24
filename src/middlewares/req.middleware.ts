import { Request, Response} from 'express';


export function req(req: Request, res: Response, next:Function) {
  console.log("Simple Log")
  next();
}