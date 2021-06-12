import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

export const postRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/form', component: PostFormComponent },
  { path: 'posts/edit/:id', component: PostFormComponent},
  { path: '**', component: PageNotFoundComponent }

];
