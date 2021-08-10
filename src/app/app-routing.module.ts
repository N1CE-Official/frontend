import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './public/blog/blog-home/blog-home.component';
import { BlogPostDetailComponent } from './public/blog/blog-post-detail/blog-post-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ExpertDetailComponent } from './public/common/expert-detail/expert-detail.component';
import { CatalogHomeComponent } from './public/platform/catalog-home/catalog-home.component';
import { BlogCategoryResolverService } from './shared/resolver/blog-category-resolver.service';
import { BlogPostsResolverService } from './shared/resolver/blog-posts-resolver.service';

const routes: Routes = [
  {path: 'blog', component: BlogHomeComponent, resolve: {categories: BlogCategoryResolverService, posts: BlogPostsResolverService}},
  {path: 'post/:id', component: BlogPostDetailComponent},
  {path: 'expert/:id', component: ExpertDetailComponent},
  {path: 'catalog', component: CatalogHomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
