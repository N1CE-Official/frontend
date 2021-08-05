import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArticleCardComponent } from './public/blog/article-card/article-card.component';
import { N1ceToolbarComponent } from './shared/n1ce-toolbar/n1ce-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogBackboneComponent } from './public/blog/blog-backbone/blog-backbone.component';
import { ArticleInEvidenceComponent } from './public/blog/article-in-evidence/article-in-evidence.component';
import { ArticleCategoryComponent } from './public/blog/article-category/article-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogSideBannerComponent } from './public/blog/blog-side-banner/blog-side-banner.component';
import { CategoryTitleComponent } from './public/blog/category-title/category-title.component';
import { ArticleDetailComponent } from './public/blog/article-detail/article-detail.component';
import { AuthorBoxComponent } from './public/common/author-box/author-box.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/service/in-memory-data.service';
import { SystemMessagesComponent } from './shared/system-messages/system-messages.component';
import { AuthorTagsComponent } from './public/common/author-tags/author-tags.component';
import { AuthorSocialComponent } from './public/common/author-social/author-social.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDribbble,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { AuthorBadgeComponent } from './public/common/author-badge/author-badge.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthorBadgeInEvidenceComponent } from './public/common/author-badge-in-evidence/author-badge-in-evidence.component';
import { ExpertDetailComponent } from './public/common/expert-detail/expert-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    N1ceToolbarComponent,
    BlogBackboneComponent,
    ArticleInEvidenceComponent,
    ArticleCategoryComponent,
    BlogSideBannerComponent,
    CategoryTitleComponent,
    ArticleDetailComponent,
    ExpertDetailComponent,
    AuthorBoxComponent,
    SystemMessagesComponent,
    AuthorTagsComponent,
    AuthorSocialComponent,
    AuthorBadgeComponent,
    PageNotFoundComponent,
    AuthorBadgeInEvidenceComponent
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
    library.addIcons(faFacebookSquare, faLinkedin, faTwitter, faInstagram, faDribbble)
  }
}
