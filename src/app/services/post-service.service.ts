import { Injectable } from '@angular/core';
import { Posts } from '../models/post.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  apiPosts="http://localhost:5001/api/postList"
  postList : Posts[] = []

  constructor( private http : HttpClient) {

    this.getPosts().subscribe((postList ) => {
      this.postList =  postList;
    });
   }
  getPosts() : Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiPosts);
  }
}
