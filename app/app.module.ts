
import { NgModule }     from '@angular/core';
import { BrowserModule }from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, HttpModule],
    exports: [],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule { }
