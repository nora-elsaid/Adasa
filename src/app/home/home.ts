import { ALLPOSTS } from './../allposts';
import { Component } from '@angular/core';
import { Posts } from "../posts/posts";
import { Post } from '../post';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Posts, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // posts: Post[] = ALLPOSTS;
  allPosts: Post[] = ALLPOSTS;
  featuredPosts: Post[] = this.allPosts.filter(post => post.featured).slice(0, 3);
  
}
