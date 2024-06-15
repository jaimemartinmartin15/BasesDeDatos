import { Routes } from '@angular/router';
import { SqlComponent } from './sql.component';

export const SQL_ROUTES: Routes = [
  {
    path: 'ejercicios',
    loadChildren: () => import('./sql-exercises/sql-exercises.routes').then((m) => m.SQL_EXERCISES_ROUTES),
  },
  {
    path: '',
    component: SqlComponent,
    title: 'Lenguaje SQL',
    data: {
      metaTags: {
        description: 'Aprende el lenguaje SQL y su sintáxis con magníficos ejemplos y explicaciones.',
        keywords: ['sql', 'bases de datos', 'select', 'join', 'tablas'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '8 de abril de 2023',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
