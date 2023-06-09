import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onUsers() {
    this.router.navigate(['users'], {relativeTo: this.route})
  }

  onPosts() {
    this.router.navigate([''], {relativeTo: this.route})
  }

}
