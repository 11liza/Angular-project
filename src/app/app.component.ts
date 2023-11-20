import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    /* PostComponent,
    NavbarComponent, */
    FormsModule
  ],
})

export class AppComponent {

  /* implements AfterViewInit { */

  /* Class Biding */
  /*  buttonClick() {
     throw new Error('Method not implemented.');
   } */
  /* title = 'Angular-project';
  parentMessage: string = 'Message coming from parent component';
  message!: string;
  fromChildOutput: string | undefined;
  imgUrl: string = 'https: *///miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png';
  /* userName: any; */

  /* Angular two way binding */
  /* userName: string | undefined;
  textValue: string = "Value is coming from component"; */




  /* <!-- Event binding --> */
  /*   buttonClick() {
      console.log('Button Click Event worked!')
    } */

  /*Event filtering*/

  /*  onKeyup() {
     console.log("Enter key pressed"); */


  /*  <!-- Template variable --> */
  /* onKeyup() {
    console.log(this.textValue);


  }
 */



  /*  @ViewChild(PostComponent) childComp: any;
 
   constructor() {
     console.log(this.childComp);
   }
 
   ngAfterViewInit(): void {
     console.log(this.childComp)
     this.message = this.childComp.childMessage
   }
   reciveMessage($event: any) {
     this.fromChildOutput = $event; */

  postTitle: string | undefined;
  postDetails: string | undefined;
  imageURL: string | undefined;
  postURL: string | undefined;
  addBackground: boolean | undefined;
  /* } */
}