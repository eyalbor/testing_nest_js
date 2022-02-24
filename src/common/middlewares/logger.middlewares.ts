import { Request, Response, NextFunction } from 'express';

//Nest middleware fully supports Dependency Injection, is done through the constructor
//Consider using the simpler functional middleware alternative any time your middleware doesn't need any dependencies.
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
