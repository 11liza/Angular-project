import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './post/post.component';

NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
    ],
    /*    [
           providers: [],
       bootstrap: [AppComponent]
       ] */
})
export const routes: Routes = [];
