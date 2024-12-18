import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTaskComponent {

}
