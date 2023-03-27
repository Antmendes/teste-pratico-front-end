import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/users.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: Users[] = []

  constructor(private usersService: UsersService,
    public dialog: MatDialog) { 
    
      this.usersService.getUsers().subscribe(
      (data) => {
        this.listUsers = data
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

}
