import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_USERS = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.API_USERS)
  }
}
