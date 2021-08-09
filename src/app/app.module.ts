import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlogPostCardComponent } from './public/blog/blog-post-card/blog-post-card.component';
import { N1ceToolbarComponent } from './shared/n1ce-toolbar/n1ce-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogHomeComponent } from './public/blog/blog-home/blog-home.component';
import { BlogPostInEvidenceComponent } from './public/blog/blog-post-in-evidence/blog-post-in-evidence.component';
import { BlogCategoryComponent } from './public/blog/blog-category/blog-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogSideBannerComponent } from './public/blog/blog-side-banner/blog-side-banner.component';
import { CategoryTitleComponent } from './public/common/category-title/category-title.component';
import { BlogPostDetailComponent } from './public/blog/blog-post-detail/blog-post-detail.component';
import { ExpertBoxComponent } from './public/common/expert-box/expert-box.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/service/in-memory-data.service';
import { SystemMessagesComponent } from './shared/system-messages/system-messages.component';
import { ExpertTagsComponent } from './public/common/expert-tags/expert-tags.component';
import { ExpertSocialIconsComponent } from './public/common/expert-social-icons/expert-social-icons.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDribbble,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { ExpertBadgeComponent } from './public/common/expert-badge/expert-badge.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ExpertBadgeInEvidenceComponent } from './public/common/expert-badge-in-evidence/expert-badge-in-evidence.component';
import { ExpertDetailComponent } from './public/common/expert-detail/expert-detail.component';
import { BlogPostListComponent } from './public/blog/blog-post-list/blog-post-list.component';
import { ServiceCardComponent } from './public/platform/service-card/service-card.component';
import { CatalogHomeComponent } from './public/platform/catalog-home/catalog-home.component';
import { PlatformCategoryComponent } from './public/platform/platform-category/platform-category.component';
import { ServiceListComponent } from './public/platform/service-list/service-list.component';
import { ExpertBadgeForServicesComponent } from './public/common/expert-badge-for-services/expert-badge-for-services.component';
import { ExpertRatingComponent } from './public/common/expert-rating/expert-rating.component';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CatalogFiltersComponent } from './public/platform/catalog-filters/catalog-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostCardComponent,
    N1ceToolbarComponent,
    BlogHomeComponent,
    BlogPostInEvidenceComponent,
    BlogCategoryComponent,
    BlogSideBannerComponent,
    CategoryTitleComponent,
    BlogPostDetailComponent,
    ExpertDetailComponent,
    ExpertBoxComponent,
    SystemMessagesComponent,
    ExpertTagsComponent,
    ExpertSocialIconsComponent,
    ExpertBadgeComponent,
    PageNotFoundComponent,
    ExpertBadgeInEvidenceComponent,
    BlogPostListComponent,
    ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    ExpertBadgeForServicesComponent,
    ExpertRatingComponent,
    CatalogFiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, NgbModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ), FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faFacebookSquare, faLinkedin, faTwitter, faInstagram, faDribbble, faStar)
  }
}
