import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggingService } from "../logging.service";
import { Blog } from "./blog";


@Injectable({
    providedIn: 'root'
})

export class BlogService {
    private apiBlogsUrl = 'api/blogs';
    constructor(
       private loggingService: LoggingService,
       private http: HttpClient 
    ) {}

    getBlogs(): Observable<Blog[]> {
        this.loggingService.add('BlogService: listing blogs');
        return this.http.get<Blog[]>(this.apiBlogsUrl);
    }

    getBlog(id): Observable<Blog> {
        this.loggingService.add('BlogService: get blog detail by id='+id);
        return this.http.get<Blog>(this.apiBlogsUrl+'/'+id);
    }

}