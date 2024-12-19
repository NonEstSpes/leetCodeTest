import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { LeftZoneComponent } from './components/left-zone/left-zone.component';
import { RightZoneComponent } from './components/right-zone/right-zone.component';
import { HeaderComponent } from './components/header/header.component';
import {DescriptionTaskService} from './services/description-task.service';
import {RunCodeService} from './services/run-code.service';
import {Button} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {IftaLabel} from 'primeng/iftalabel';
import {Card} from 'primeng/card';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

@NgModule({
  declarations: [
    CardTaskComponent,
    LeftZoneComponent,
    RightZoneComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    Button,
    DropdownModule,
    IftaLabel,
    Card,
    HttpClientModule,
  ],
  exports: [
    CardTaskComponent,
  ],
  providers: [
    DescriptionTaskService,
    RunCodeService,
    HttpClient,
  ]
})
export class CardTaskModule { }
