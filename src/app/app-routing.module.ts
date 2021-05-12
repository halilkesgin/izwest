import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: 'article', component:ArticleComponent},
  { path: 'about', component: AboutComponent },
  { path: '', component: ArticleComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
