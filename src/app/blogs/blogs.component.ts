import { Component, OnInit } from '@angular/core';
import { Blog } from '../bfolder/blog';
import { BlogService } from '../bfolder/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] = [];
  blogLength: number;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => {
        this.blogs = blogs.slice(0,10);
        this.blogLength = blogs.length;
      })
  }

}
