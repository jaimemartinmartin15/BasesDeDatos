import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CollapsibleModule,
  HeaderPrintComponent,
  ImageFullScreenModule,
  ResponsiveLayoutComponent,
  TerminalCodeComponent,
} from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [
    CommonModule,
    HeaderPrintComponent,
    TerminalCodeComponent,
    ResponsiveLayoutComponent,
    CollapsibleModule,
    ImageFullScreenModule,
    RouterLink,
  ],
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss'],
})
export class SqlComponent {}
