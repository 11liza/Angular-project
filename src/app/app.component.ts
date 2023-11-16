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
  imgUrl: string = 'https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png';


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