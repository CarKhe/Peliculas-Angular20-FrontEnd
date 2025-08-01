import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing:'dynamic'}},//mostrar de manera dinamica el mensaje de error debajo de un input
    provideMomentDateAdapter({
      parse: {
        dateInput: ['DD-MM-YYYY']
      },
      display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel:'MM-YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel:'MMMM YYYY'
      }
    }),
    provideHttpClient(withFetch()), //Agregar http para los llamados a la API
    importProvidersFrom([SweetAlert2Module.forRoot()])
  ]
};


