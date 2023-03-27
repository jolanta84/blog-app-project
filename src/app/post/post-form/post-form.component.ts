import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  public form!: FormGroup;
  public id!: string;
  public isAddMode!: boolean;
  public loading = false;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  public ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.postService
        .getById(this.id)
        .pipe(first())
        .subscribe((x) => this.form.patchValue(x));
    }
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    if (this.isAddMode) {
      this.createPost();
    } else {
      this.updatePost();
    }
  }

  private createPost() {
    this.postService
      .create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  private updatePost() {
    this.postService
      .update(this.id, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }
}
