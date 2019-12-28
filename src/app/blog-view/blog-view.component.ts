import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

public currentBlog;
  constructor( private blogHttpService: BlogHttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //this.currentBlog = this.blogService.getSingleBlog(myBlogId);
    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data.data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )
  }

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }


    )
  }

}