import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        console.log('inside guard');
        const roles = this.reflector.get<string[]>('roles', context.getHandler);
        console.log(roles);
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return this.matchRoles(roles, user.roles);
    }

    private matchRoles(roles: string[], userRoles: string[]) {
        for (const role of roles) {
            for (const userRole of userRoles) {
                if (role === userRole) return true;
            }
        }
        return false;
    }
}

