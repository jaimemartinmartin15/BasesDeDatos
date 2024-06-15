import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CollapsibleModule, HeaderPrintComponent, ResponsiveLayoutComponent, TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-sql-exercises',
  standalone: true,
  imports: [CommonModule, HeaderPrintComponent, TerminalCodeComponent, CollapsibleModule, ResponsiveLayoutComponent],
  templateUrl: './sql-exercises.component.html',
  styleUrls: ['./sql-exercises.component.scss'],
})
export class SqlExercisesComponent {}
