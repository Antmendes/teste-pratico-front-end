import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comments } from 'src/app/model/comments';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listPost: Post[] = []
  comments: Comments[] = []
  
  
  

  constructor(private postsService: PostsService,
    public dialog: MatDialog) 
    {
      this.postsService.getListPosts().subscribe(
        (data) => {
          this.listPost = data
          
        },
        (error) => {
          this.dialog.open(ErrorDialogComponent, {
            data: error
          })
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
        this.dialog.open(ErrorDialogComponent, {
          data: error
        })
      }
     )
  }



  

  

  

  

}
