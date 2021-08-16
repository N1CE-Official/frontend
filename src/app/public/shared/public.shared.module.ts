import { ModuleWithProviders, NgModule } from '@angular/core';
import { CategoryTitleComponent } from './components/category-title/category-title.component';
import { ExpertBadgeComponent } from './components/expert-badge/expert-badge.component';
import { ExpertBadgeForServicesComponent } from './components/expert-badge-for-services/expert-badge-for-services.component';
import { ExpertBadgeInEvidenceComponent } from './components/expert-badge-in-evidence/expert-badge-in-evidence.component';
import { ExpertBoxComponent } from './components/expert-box/expert-box.component';
import { ExpertRatingComponent } from './components/expert-rating/expert-rating.component';
import { ExpertSocialIconsComponent } from './components/expert-social-icons/expert-social-icons.component';
import { ExpertTagsComponent } from './components/expert-tags/expert-tags.component';
import { SharedModule } from '../../shared/shared.module';
import { ExpertCandidateCardComponent } from './components/expert-candidate-card/expert-candidate-card.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CategoryTitleComponent,
    ExpertBadgeComponent,
    ExpertBadgeForServicesComponent,
    ExpertBadgeInEvidenceComponent,
    ExpertBoxComponent,
    ExpertRatingComponent,
    ExpertSocialIconsComponent,
    ExpertTagsComponent,
    ExpertCandidateCardComponent,],
  exports: [CategoryTitleComponent,
    ExpertBadgeComponent,
    ExpertBadgeForServicesComponent,
    ExpertBadgeInEvidenceComponent,
    ExpertBoxComponent,
    ExpertRatingComponent,
    ExpertSocialIconsComponent,
    ExpertTagsComponent,
    SharedModule,
    ExpertCandidateCardComponent,],
  entryComponents: [CategoryTitleComponent,
    ExpertBadgeComponent,
    ExpertBadgeForServicesComponent,
    ExpertBadgeInEvidenceComponent,
    ExpertBoxComponent,
    ExpertRatingComponent,
    ExpertSocialIconsComponent,
    ExpertTagsComponent,
    ExpertCandidateCardComponent,]
})

export class PublicSharedModule {
  static forRoot(): ModuleWithProviders<PublicSharedModule> {
    return {
      ngModule: PublicSharedModule,
      providers: []
    };
  }
}
