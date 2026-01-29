

import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { ALLPOSTS } from '../allposts';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  @Input() allposts : Post[] = ALLPOSTS;
  // @Input() allPosts: Post[] = ALLPOSTS;

  @Input() view: 'grid' | 'list' = 'list';  


}
