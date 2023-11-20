import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';

NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    /*    [
           providers: [],
       bootstrap: [AppComponent]
       ] */
})
export const routes: Routes = [];
