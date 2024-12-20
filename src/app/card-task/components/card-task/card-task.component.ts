import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DescriptionTaskService} from '../../services/description-task.service';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTaskComponent {

  constructor(
    public descriptionTaskService: DescriptionTaskService,
  ) {
    this.descriptionTaskService.getTaskById(0)
  }

}
