import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//import { stringify } from 'querystring';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    
    title: string = "The title!";
    value: number = 42;

    constructor(private http: Http) { 
    }

    getData(){

        let body: any = {
            Arrivals: {
                flightType: "Arrivals",
                searchType: "Destination",
                query: null,
                timespan: "EightHours"
            },
            Departures: {
                flightType: "Departures",
                searchType: "Destination",
                query: null,
                timespan: "EightHours"
            }
        };
        
        //body = stringify(body);

        body = "Arrivals%5BflightType%5D=Arrivals&Arrivals%5BsearchType%5D=Destination&Arrivals%5Bquery%5D=&Arrivals%5Btimespan%5D=EightHours&Departures%5BflightType%5D=Departures&Departures%5BsearchType%5D=Destination&Departures%5Bquery%5D=&Departures%5Btimespan%5D=EightHours";
        
        let headers = new Headers({ 'content-type': 'application/x-www-form-urlencoded','accept': "application/json"});
        let options = new RequestOptions({ headers: headers });
        this.http.post("https://www.birminghamairport.co.uk/Api/FidApi/GetFlights", body, options)
            .map(res => res.json())
            .subscribe(data => yayItWorks(data),error => console.log("error! : ", error));

        var yayItWorks = function (data: any) {
            console.log(data);
        };


    }

    ngOnInit() { }
}