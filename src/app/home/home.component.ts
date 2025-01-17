import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allBlogs: any;
    errorMessage: any;

    constructor(private blogHttpService: BlogHttpService) {
        console.log('home view init');
    }

    ngOnInit() {
        this.blogHttpService.getAllBlogs().subscribe(
            data => {
                console.log(data);
                this.allBlogs = data["data"];
                return this.allBlogs;
            },
            error => {
                console.log('Error in getting blogs', error);
            }
        );
    }

    goGoogle(): void {
        window.location.href = 'http://www.google.com';
    }

    //   goToUrl(): void {
    //     this.document.location.href = 'https://stackoverflow.com';
    // }
}