import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  comments: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openComments(){
    this.comments = !this.comments
  }

  

}
