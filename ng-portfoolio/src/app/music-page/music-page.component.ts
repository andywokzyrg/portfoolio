import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-music-page',
    templateUrl: './music-page.component.html',
    styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

    old: boolean = true

    constructor() {
    }

    ngOnInit(): void {
    }

}
