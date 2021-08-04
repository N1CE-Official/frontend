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
