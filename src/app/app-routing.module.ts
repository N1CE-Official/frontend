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
import { SearchResultsPageComponent } from './public/common/components/search-results-page/search-results-page.component';
import { SearchResultsResolverService } from './public/common/resolvers/search-results-resolver.service';
import { PrivacyPolicyComponent } from './public/common/components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './public/common/components/terms-conditions/terms-conditions.component';
import { OurExpertsPageComponent } from './public/common/components/our-experts-page/our-experts-page.component';
import { SignUpPageComponent } from './public/shared/components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './public/shared/components/login-page/login-page.component';
import { ForgotPasswordComponent } from './public/shared/components/forgot-password/forgot-password.component';
import { ExpertCandidatesResolverService } from './public/common/resolvers/expert-candidates-resolver.service';
import { TopExpertsResolverService } from './public/common/resolvers/top-experts-resolver.service';

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
  {
    path: 'search-results/:str', component: SearchResultsPageComponent, resolve: {
      searchResults: SearchResultsResolverService
    }
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent
  },
  {
    path: 'terms-conditions', component: TermsConditionsComponent
  },
  {
    path: 'our-experts', component: OurExpertsPageComponent, resolve: {
      expertCandidates: ExpertCandidatesResolverService,
      topExperts: TopExpertsResolverService
    }
  },
  {
    path: 'sign-up', component: SignUpPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
