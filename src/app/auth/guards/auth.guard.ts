import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { concatAll, pipe, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verificarAutenticacion()
  .pipe(
    tap(estaAutenticado => {
        if(!estaAutenticado){
          router.navigate(['./auth/login']);
        }
    }));
  // if(authService.auth.id){
  //   return true;
  // }
  // console.log('Bloqueado por el AuthGuard');
  // return false;
};
