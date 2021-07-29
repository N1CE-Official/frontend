import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleCardComponent } from './article-card/article-card.component';
import { N1ceToolbarComponent } from './n1ce-toolbar/n1ce-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ArticleInEvidenceComponent } from './article-in-evidence/article-in-evidence.component';
import { ArticleCategoryComponent } from './article-category/article-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogSideBannerComponent } from './blog-side-banner/blog-side-banner.component';
import { CategoryTitleComponent } from './category-title/category-title.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthorBoxComponent } from './author-box/author-box.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SystemMessagesComponent } from './system-messages/system-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    N1ceToolbarComponent,
    BlogComponent,
    ArticleInEvidenceComponent,
    ArticleCategoryComponent,
    BlogSideBannerComponent,
    CategoryTitleComponent,
    ArticleDetailComponent,
    AuthorBoxComponent,
    SystemMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, NgbModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
