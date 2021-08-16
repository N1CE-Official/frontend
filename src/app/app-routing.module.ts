import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './public/blog/components/blog-home/blog-home.component';
import { BlogPostDetailComponent } from './public/blog/components/blog-post-detail/blog-post-detail.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ExpertDetailComponent } from './public/common/components/expert-detail/expert-detail.component';
import { CatalogHomeComponent } from './public/platform/components/catalog-home/catalog-home.component';
import { BlogCategoryResolverService } from './public/blog/resolvers/blog-category-resolver.service';
import { BlogPostsResolverService } from './public/blog/resolvers/blog-posts-resolver.service';
import { InEvidencePostResolverService } from './public/blog/resolvers/in-evidence-post-resolver.service';
import { BlogPostDetailResolverService } from './public/blog/resolvers/blog-post-detail-resolver.service';
import { ExpertDetailResolverService } from './public/common/resolvers/expert-detail-resolver.service';
import { ServiceCategoryResolverService } from './public/platform/resolvers/service-category-resolver.service';
import { PlatformServiceResolverService } from './public/platform/resolvers/platform-service-resolver.service';
import { ServiceDetailComponent } from './public/platform/components/service-detail/service-detail.component';
import { ServiceDetailResolverService } from './public/platform/resolvers/service-detail-resolver.service';
import { ExpertBlogPostsResolverService } from './public/common/resolvers/expert-blog-posts-resolver.service';
import { ExpertServiceResolverService } from './public/common/resolvers/expert-service-resolver.service';
import { HomePageComponent } from './public/common/components/home-page/home-page.component';
import { HomeServiceCategoryResolverService } from './public/common/resolvers/home-service-category-resolver.service';
import { HomeTopServicesResolverService } from './public/common/resolvers/home-top-services-resolver.service';
import { HomeLatestBlogPostsResolverService } from './public/common/resolvers/home-latest-blog-posts-resolver.service';
import { HomeLatestExpertCandidatesResolverService } from './public/common/resolvers/home-latest-expert-candidates-resolver.service';
import { ExpertCandidateDetailComponent } from './public/common/components/expert-candidate-detail/expert-candidate-detail.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, resolve: {
      categories: HomeServiceCategoryResolverService,
      services: PlatformServiceResolverService,
      topServices: HomeTopServicesResolverService,
      latestBlogPosts: HomeLatestBlogPostsResolverService,
      latestExpertCandidates: HomeLatestExpertCandidatesResolverService
    }
  },
  {
    path: 'blog', component: BlogHomeComponent, resolve: {
      categories: BlogCategoryResolverService,
      posts: BlogPostsResolverService,
      inEvidencePost: InEvidencePostResolverService
    }
  },
  {
    path: 'post/:id', component: BlogPostDetailComponent, resolve: {
      post: BlogPostDetailResolverService
    }
  },
  {
    path: 'expert/:id', component: ExpertDetailComponent, resolve: {
      expert: ExpertDetailResolverService,
      blogPosts: ExpertBlogPostsResolverService,
      services: ExpertServiceResolverService
    }
  },
  {
    path: 'expert-candidate/:id', component: ExpertCandidateDetailComponent, resolve: {
      expert: ExpertDetailResolverService,
      blogPosts: ExpertBlogPostsResolverService
    }
  },
  {
    path: 'service/:id', component: ServiceDetailComponent, resolve: {
      service: ServiceDetailResolverService
    }
  },
  {
    path: 'explore', component: CatalogHomeComponent, resolve: {
      categoryTitles: ServiceCategoryResolverService,
      services: PlatformServiceResolverService
    }
  },
  {
    path: 'explore/:category', component: CatalogHomeComponent, resolve: {
      categoryTitles: ServiceCategoryResolverService,
      services: PlatformServiceResolverService
    }
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
