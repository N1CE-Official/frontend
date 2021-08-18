import { ModuleWithProviders, NgModule } from '@angular/core';
import { PublicSharedModule } from '../shared/public.shared.module';
import { ExpertDetailComponent } from './components/expert-detail/expert-detail.component';
import { BlogModule } from '../blog/blog.module';
import { PlatformModule } from '../platform/platform.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeTopBannerSectionComponent } from './components/home-top-banner/home-top-banner-section.component';
import { HomeCategoriesSectionComponent } from './components/home-categories-section/home-categories-section.component';
import { HomeLatestBlogPostsSectionComponent } from './components/home-latest-blog-posts-section/home-latest-blog-posts-section.component';
import { HomeTopServicesSectionComponent } from './components/home-top-services-section/home-top-services-section.component';
import { HomeVoteOurExpertsSectionComponent } from './components/home-vote-our-experts-section/home-vote-our-experts-section.component';
import { HomeLowerBannerSectionComponent } from './components/home-lower-banner-section/home-lower-banner-section.component';
import { ExpertCandidateDetailComponent } from './components/expert-candidate-detail/expert-candidate-detail.component';
import { ExpertCandidateApprovalBoxComponent } from './components/expert-candidate-approval-box/expert-candidate-approval-box.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { FormsModule } from '@angular/forms';
import { SearchResultCardComponent } from './components/search-result-card/search-result-card.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

@NgModule({
  imports: [PublicSharedModule, BlogModule, PlatformModule, FormsModule],
  declarations: [ExpertDetailComponent, ExpertCandidateDetailComponent,
    HomePageComponent,
    HomeTopBannerSectionComponent,
    HomeCategoriesSectionComponent,
    HomeLatestBlogPostsSectionComponent,
    HomeTopServicesSectionComponent,
    HomeVoteOurExpertsSectionComponent,
    HomeLowerBannerSectionComponent,
    ExpertCandidateApprovalBoxComponent,
    SearchResultsPageComponent,
    SearchResultCardComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,],
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
