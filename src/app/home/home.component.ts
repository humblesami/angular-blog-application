import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from './blogHttpService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService) { }

  allBlogs;
  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
  }

}