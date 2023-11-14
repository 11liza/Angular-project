import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'navbar', component: NavbarComponent },
];

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent],
})
export class AppModule { }