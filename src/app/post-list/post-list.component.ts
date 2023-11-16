import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'

})

export class PostListComponent implements OnInit {

  /*  title: string = "List of Post";
   messageList: string = "Hello post list";
   parentMessage: string = 'Message coming from List parent' */

  @Input() fromPostParent: string = ' ';

  constructor() { }

  ngOnInit(): void {


  }
}
