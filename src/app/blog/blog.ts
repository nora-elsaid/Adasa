import { ALLPOSTS } from './../allposts';
import { Component } from '@angular/core';
import { Post } from '../post';
import { Posts } from "../posts/posts";



@Component({
  selector: 'app-blog',
  imports: [Posts],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  posts: Post[] = ALLPOSTS;
  filteredPosts: Post[] = ALLPOSTS;

  selectedCategory: string = 'all';
  view: 'grid' | 'list' = 'grid';

  filterPosts(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.category === category);
      console.log(this.filterPosts);
      console.log(this.filteredPosts.length);
      
      
    }
  }

  setView(view: 'grid' | 'list') {
    this.view = view;
  }

}
