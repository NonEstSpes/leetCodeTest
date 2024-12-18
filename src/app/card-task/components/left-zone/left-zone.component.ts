import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-left-zone',
  templateUrl: './left-zone.component.html',
  styleUrl: './left-zone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftZoneComponent {

}
