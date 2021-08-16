import { ModuleWithProviders, NgModule } from '@angular/core';
import { PublicSharedModule } from '../shared/public.shared.module';
import { ExpertDetailComponent } from './components/expert-detail/expert-detail.component';
import { BlogModule } from '../blog/blog.module';
import { PlatformModule } from '../platform/platform.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeTopBannerSectionComponent } from './components/home-top-banner/home-top-banner-section.component';
import { HomeCategoriesSectionComponent } from './components/home-categories/home-categories-section.component';
import { HomeLatestBlogPostsSectionComponent } from './components/home-latest-blog-posts-section/home-latest-blog-posts-section.component';
import { HomeTopServicesSectionComponent } from './components/home-top-services-section/home-top-services-section.component';
import { HomeVoteOurExpertsSectionComponent } from './components/home-vote-our-experts-section/home-vote-our-experts-section.component';
import { HomeLowerBannerSectionComponent } from './components/home-lower-banner-section/home-lower-banner-section.component';
import { ExpertCandidateDetailComponent } from './components/expert-candidate-detail/expert-candidate-detail.component';
import { ExpertCandidateApprovalBoxComponent } from './components/expert-candidate-approval-box/expert-candidate-approval-box.component';

@NgModule({
  imports: [PublicSharedModule, BlogModule, PlatformModule],
  declarations: [ExpertDetailComponent, ExpertCandidateDetailComponent,
    HomePageComponent,
    HomeTopBannerSectionComponent,
    HomeCategoriesSectionComponent,
    HomeLatestBlogPostsSectionComponent,
    HomeTopServicesSectionComponent,
    HomeVoteOurExpertsSectionComponent,
    HomeLowerBannerSectionComponent,
    ExpertCandidateApprovalBoxComponent,],
  exports: [ExpertDetailComponent,ExpertCandidateDetailComponent,],
  entryComponents: [ExpertDetailComponent,ExpertCandidateDetailComponent,]
})

export class CommonModule {
  static forRoot(): ModuleWithProviders<CommonModule> {
    return {
      ngModule: CommonModule,
      providers: []
    };
  }
}
