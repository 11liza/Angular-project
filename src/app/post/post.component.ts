import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [CommonModule, PostListComponent]
})
export class PostComponent implements OnInit {
  sendMessage() {
    throw new Error('Method not implemented.');
  }

  title: string = "List of Posts";
  messagePost: string = "Message Post";
  postParentMessage: string = 'Message coming from post-list parent';
  childMessage: string = 'From Child Component';
  outputChildMessage: string = 'Message from Child Component Via Output';


  @Input() fromParent: string | undefined;

  @Output() messegeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

    this.sendMessage()
    {
      this.messegeEvent.emit(this.outputChildMessage);
    }
  }


}
