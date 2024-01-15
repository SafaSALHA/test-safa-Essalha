import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postListe : any [] | undefined
 constructor(private postsService : PostServiceService){}
 ngOnInit(): void {
     this.postListe=this.postsService.getPosts()
 }
}
