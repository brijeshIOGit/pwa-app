import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {
      breadcrumb: 'home'
    }
  },
  {
    path: 'users', component: UsersComponent, data: {
      breadcrumb: 'Users'
    }
  },
  {
    path: 'posts', component: PostsComponent, data: {
      breadcrumb: 'Posts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
