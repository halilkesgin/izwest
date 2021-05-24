import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../bfolder/blog';
import { BlogService } from '../bfolder/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: Blog;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id)
      .subscribe(blog => this.blog = blog);
  }
}
