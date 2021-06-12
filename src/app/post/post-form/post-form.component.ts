import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Post } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  posts!: Post[];


    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getAll()
            .pipe(first())
            .subscribe(posts => this.posts = posts);
    }

    deletePost(id: string) {
        const post = this.posts.find(x => x.id === id);



        this.postService.delete(id)
            .pipe(first())
            .subscribe(() => this.posts = this.posts.filter(x => x.id !== id));
    }
}
