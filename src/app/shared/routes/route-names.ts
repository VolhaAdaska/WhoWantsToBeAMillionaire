import { InjectionToken } from '@angular/core';

import { IRouteNames } from '@shared/routes/common.interface';


export const ROUTE_NAMES = new InjectionToken<IRouteNames>('ROUTE_NAMES');

export function routeNamesObjFactory(): IRouteNames {
  return {
    login: 'login',
    register: 'register',
    home: 'home',
    topUsers: 'top-users',
    game: 'game',
    pageNotFound: 'page-not-found',
  };
}
