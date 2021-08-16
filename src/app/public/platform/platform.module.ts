import { ModuleWithProviders, NgModule } from '@angular/core';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CatalogHomeComponent } from './components/catalog-home/catalog-home.component';
import { PlatformCategoryComponent } from './components/platform-category/platform-category.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { PublicSharedModule } from '../shared/public.shared.module';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeTopBannerSectionComponent } from './components/home-banner/home-top-banner-section.component';
import { HomeCategoriesSectionComponent } from './components/home-categories/home-categories-section.component';
import { HomeLatestBlogPostsSectionComponent } from './components/home-latest-blog-posts-section/home-latest-blog-posts-section.component';
import { HomeTopServicesSectionComponent } from './components/home-top-services-section/home-top-services-section.component';
import { HomeVoteOurExpertsSectionComponent } from './components/home-vote-our-experts-section/home-vote-our-experts-section.component';
import { HomeLowerBannerSectionComponent } from './components/home-lower-banner-section/home-lower-banner-section.component';

@NgModule({
  imports: [PublicSharedModule],
  declarations: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,
    ServiceDetailComponent,
    HomePageComponent,
    HomeTopBannerSectionComponent,
    HomeCategoriesSectionComponent,
    HomeLatestBlogPostsSectionComponent,
    HomeTopServicesSectionComponent,
    HomeVoteOurExpertsSectionComponent,
    HomeLowerBannerSectionComponent,],
  exports: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,
    ServiceDetailComponent,],
  entryComponents: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,
    ServiceDetailComponent,]
})

export class PlatformModule {
  static forRoot(): ModuleWithProviders<PlatformModule> {
    return {
      ngModule: PlatformModule,
      providers: []
    };
  }
}
