import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  comments: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openComments(){
    this.comments = !this.comments
  }

  

}
