import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
    @Input() width: number = 20
    @Input() height: number = 30

    ngOnInit(): void {
    }
}
