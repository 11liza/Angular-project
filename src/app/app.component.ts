import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    PostComponent,
    NavbarComponent,
  ],
})

export class AppComponent implements AfterViewInit {
  title = 'Angular-project';
  parentMessage: string = 'Message coming from parent component';
  message!: string;
  fromChildOutput: string | undefined;


  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.message = this.childComp.childMessage
  }
  reciveMessage($event: any) {
    this.fromChildOutput = $event;

  }
}