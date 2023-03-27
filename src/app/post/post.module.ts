import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { postRoutes } from './post.routes';
import { PostListComponent } from './post-list/post-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [PostFormComponent, PostListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(postRoutes),
    NgxPaginationModule
  ],
  exports: [PostFormComponent, PostListComponent],
})
export class PostModule {}
