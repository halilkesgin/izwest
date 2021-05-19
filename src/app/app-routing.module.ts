import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { DesignDetailComponent } from './design-detail/design-detail.component';
import { DesignsComponent } from './designs/designs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full'},
  { path: 'article', component:ArticleComponent},
  { path: 'about', component: AboutComponent },
  { path: 'designs', component: DesignsComponent},
  { path: 'designs/design/:id', component: DesignDetailComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'blogs/blog/:id', component: BlogDetailComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
