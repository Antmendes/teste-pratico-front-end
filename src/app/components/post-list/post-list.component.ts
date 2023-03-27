import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/model/comments';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listPost: Post[] = []
  comments: Comments[] = []
  
  
  

  constructor(private router: Router,
    private postsService: PostsService) 
    {
      this.postsService.getListPosts().subscribe(
        (data) => {
          this.listPost = data
          
        },
        (error) => {
          console.log(error)
        }
      )
      
     }

  ngOnInit(): void {
   
  }

  getComments(id: number) {
    this.postsService.getComments(id).subscribe(
      (res) => {
        this.comments = res
      },
      (error) => {
        console.log(error)
      }
     )
  }



  

  

  

  

}
