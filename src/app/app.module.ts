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

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    N1ceToolbarComponent,
    BlogComponent,
    ArticleInEvidenceComponent,
    ArticleCategoryComponent,
    BlogSideBannerComponent,
    CategoryTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
