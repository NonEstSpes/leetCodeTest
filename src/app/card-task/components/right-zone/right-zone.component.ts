import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'app-right-zone',
  templateUrl: './right-zone.component.html',
  styleUrl: './right-zone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightZoneComponent implements AfterViewInit {
  @ViewChild("editor") private editor: ElementRef<HTMLElement> | undefined;

  ngAfterViewInit(): void {
    ace.config.set(
      "basePath",
      "https://unpkg.com/ace-builds@1.4.12/src-noconflict"
    );
    const aceEditor = ace.edit(this.editor?.nativeElement);
    aceEditor.setOptions({ fontSize: "14px" });
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");
    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/html");
  }
}
