import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    isActive: boolean = false
    toggle() {
        this.isActive = !this.isActive
    }
    constructor() {
    }

    ngOnInit(): void {
    }

}
