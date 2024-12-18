import {NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import Lara from '@primeng/themes/lara';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardTaskModule} from './card-task/card-task.module';
import {providePrimeNG} from 'primeng/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardTaskModule,
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara,
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
