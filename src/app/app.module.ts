import {NgModule, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {BrowserModule, platformBrowser} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardTaskComponent} from './card-task/components/card-task/card-task.component';
import {CardTaskModule} from './card-task/card-task.module';

//platformBrowser().bootstrapModule(AppModule);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardTaskModule,
  ],
  providers: [provideExperimentalZonelessChangeDetection()],
  bootstrap: [AppComponent]
})
export class AppModule { }
