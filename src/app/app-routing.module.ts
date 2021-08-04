import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBackboneComponent } from './public/blog/blog-backbone/blog-backbone.component';
import { ArticleDetailComponent } from './public/blog/article-detail/article-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'blog', component: BlogBackboneComponent },
  { path: 'post/:id', component: ArticleDetailComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
