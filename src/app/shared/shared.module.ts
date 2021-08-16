import { ModuleWithProviders, NgModule } from '@angular/core';
import { N1ceToolbarComponent } from './components/n1ce-toolbar/n1ce-toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SystemMessagesComponent } from './components/system-messages/system-messages.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDribbble,
  faFacebookSquare,
  faInstagram,
  faLinkedin, faMedium,
  faTelegram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faBullhorn,
  faChartLine,
  faCode,
  faFan,
  faGlobe,
  faPaintBrush,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { N1ceFooterComponent } from './components/n1ce-footer/n1ce-footer.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule, NgbModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ), FontAwesomeModule,],
  declarations: [
    N1ceToolbarComponent,
    PageNotFoundComponent,
    SystemMessagesComponent,
    N1ceFooterComponent,],
  exports: [
    N1ceToolbarComponent,
    PageNotFoundComponent,
    SystemMessagesComponent,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    N1ceFooterComponent,
  ],
  entryComponents: [
    N1ceToolbarComponent,
    PageNotFoundComponent,
    SystemMessagesComponent,]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookSquare, faLinkedin, faTwitter, faTelegram, faMedium,
      faInstagram, faDribbble, faStar, faCode, faGlobe, faPaintBrush, faFan, faBullhorn, faChartLine)
  }
}
