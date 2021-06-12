import { Routes } from "@angular/router";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostListComponent } from "./post-list/post-list.component";


export const postRoutes: Routes = [
 { path: 'posts', component: PostListComponent },
    { path: 'posts/form', component: PostFormComponent }
 //   { path: 'sandwiches/:sandwichId', component: SandwichDetailsComponent }
];
