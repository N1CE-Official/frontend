import { ModuleWithProviders, NgModule } from '@angular/core';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogPostInEvidenceComponent } from './components/blog-post-in-evidence/blog-post-in-evidence.component';
import { BlogCategoryComponent } from './components/blog-category/blog-category.component';
import { BlogSideBannerComponent } from './components/blog-side-banner/blog-side-banner.component';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { PublicSharedModule } from '../shared/public.shared.module';

@NgModule({
  imports: [PublicSharedModule],
  declarations: [BlogPostCardComponent, BlogHomeComponent,
    BlogPostInEvidenceComponent,
    BlogCategoryComponent,
    BlogSideBannerComponent, BlogPostDetailComponent, BlogPostListComponent,],
  exports: [BlogPostCardComponent, BlogHomeComponent,
    BlogPostInEvidenceComponent,
    BlogCategoryComponent,
    BlogSideBannerComponent, BlogPostDetailComponent, BlogPostListComponent,],
  entryComponents: [BlogPostCardComponent, BlogHomeComponent,
    BlogPostInEvidenceComponent,
    BlogCategoryComponent,
    BlogSideBannerComponent, BlogPostDetailComponent, BlogPostListComponent,]
})

export class BlogModule {
  static forRoot(): ModuleWithProviders<BlogModule> {
    return {
      ngModule: BlogModule,
      providers: []
    };
  }
}
