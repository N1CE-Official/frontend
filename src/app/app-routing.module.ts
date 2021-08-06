import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBackboneComponent } from './public/blog/blog-backbone/blog-backbone.component';
import { BlogPostDetailComponent } from './public/blog/blog-post-detail/blog-post-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ExpertDetailComponent } from './public/common/expert-detail/expert-detail.component';

const routes: Routes = [
  {path: 'blog', component: BlogBackboneComponent},
  {path: 'post/:id', component: BlogPostDetailComponent},
  {path: 'expert/:id', component: ExpertDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
