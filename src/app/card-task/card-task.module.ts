import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { LeftZoneComponent } from './components/left-zone/left-zone.component';
import { RightZoneComponent } from './components/right-zone/right-zone.component';
import { HeaderComponent } from './components/header/header.component';
import {DescriptionTaskService} from './services/description-task.service';
import {NotificationService} from './services/notification.service';
import {RunCodeService} from './services/run-code.service';



@NgModule({
  declarations: [
    CardTaskComponent,
    LeftZoneComponent,
    RightZoneComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardTaskComponent,
  ],
  providers: [
    DescriptionTaskService,
    NotificationService,
    RunCodeService,
  ]
})
export class CardTaskModule { }
