import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

// functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(
        `REQUEST: ${new Date().toISOString()} 
            ${req.method} ${req.url}`
    );
    next();
}

// class-based middleware
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log(
//             `REQUEST: ${new Date().toISOString()} 
//             ${req.method} ${req.url}`
//         );
//         next();
//     }
// }