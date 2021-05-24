import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DesignDetailComponent } from './design-detail/design-detail.component';
import { DesignsComponent } from './designs/designs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'designs', component: DesignsComponent},
  { path: 'designs/design/:id', component: DesignDetailComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'blogs/blog/:id', component: BlogDetailComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }