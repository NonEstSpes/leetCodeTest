import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DescriptionTaskService} from '../../services/description-task.service';

@Component({
  selector: 'app-left-zone',
  templateUrl: './left-zone.component.html',
  styleUrl: './left-zone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftZoneComponent {

  constructor(
    public descriptionTaskService: DescriptionTaskService,
  ) { }

}
