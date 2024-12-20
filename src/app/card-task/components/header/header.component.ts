import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DescriptionTaskService} from '../../services/description-task.service';
import {RunCodeService} from '../../services/run-code.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    public descriptionTaskService: DescriptionTaskService,
  ) { }
}
