import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../model/comments';
import { Post } from '../model/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private API_POST_LIST = 'https://jsonplaceholder.typicode.com/posts'
  

  constructor(private httpClient: HttpClient) { }

  getListPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.API_POST_LIST)
  }

  getComments(id: any): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`${this.API_POST_LIST}/${id}/comments`)
  }
}
