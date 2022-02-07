import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() link?: string;
    @Input() name?: string;
    @Input() height: number = 51.2;
    @Input() width: number = 51.2;
}
