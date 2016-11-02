import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    
    title: string = "The title!";
    value: number = 42;

    constructor() { }

    ngOnInit() { }
}