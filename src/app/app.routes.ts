import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sql',
    loadChildren: () => import('./sql/sql.routes').then((m) => m.SQL_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'sql',
  },
];
