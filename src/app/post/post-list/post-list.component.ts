import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Post } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  public posts!: Post[];
  public p: number = 1;

  constructor(private postService: PostService) {}

  public ngOnInit() {
    this.postService
      .getAll()
      .pipe(first())
      .subscribe((posts) => (this.posts = posts));
  }

  public deletePost(id: string) {
    const post = this.posts.find((x) => x.id === id);

    this.postService
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.posts = this.posts.filter((x) => x.id !== id)));
  }
}
