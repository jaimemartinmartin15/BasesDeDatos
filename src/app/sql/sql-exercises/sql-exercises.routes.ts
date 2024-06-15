import { Routes } from '@angular/router';
import { SqlExercisesComponent } from './sql-exercises.component';

export const SQL_EXERCISES_ROUTES: Routes = [
  {
    path: '',
    component: SqlExercisesComponent,
    title: 'Ejercicios SQL',
    data: {
      metaTags: {
        description: 'Practica con esta lista de enunciados consultas SQL a la base de datos',
        keywords: ['sql', 'ejercicios', 'consultas'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '11 de junio de 2023',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
