import { ModuleWithProviders, NgModule } from '@angular/core';
import { N1ceToolbarComponent } from './components/n1ce-toolbar/n1ce-toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SystemMessagesComponent } from './components/system-messages/system-messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDribbble,
  faFacebookF,
  faFacebookSquare,
  faGooglePlusG,
  faInstagram,
  faLinkedin,
  faMedium,
  faTelegram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faBullhorn,
  faChartLine,
  faCode,
  faEnvelope,
  faFan,
  faGlobe,
  faLock,
  faPaintBrush,
  faSearch,
  faStar,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { N1ceFooterComponent } from './components/n1ce-footer/n1ce-footer.component';
import { TimeagoModule } from 'ngx-timeago';
import { CountdownModule } from 'ngx-countdown';
import { N1ceCustomTitleComponent } from './components/n1ce-custom-title/n1ce-custom-title.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule, CommonModule,
    NgbModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}
    ), FontAwesomeModule,
    TimeagoModule.forRoot(), CountdownModule,],
  declarations: [
    N1ceToolbarComponent,
    PageNotFoundComponent,
    SystemMessagesComponent,
    N1ceFooterComponent,
    N1ceCustomTitleComponent,],
  exports: [
    N1ceToolbarComponent, CommonModule,
    PageNotFoundComponent,
    SystemMessagesComponent,
    FontAwesomeModule,
    N1ceFooterComponent,
    TimeagoModule, CountdownModule,
    N1ceCustomTitleComponent,
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
      faInstagram, faDribbble, faStar, starOutline, faCode, faGlobe, faPaintBrush, faFan, faBullhorn, faChartLine,
      faThumbsUp, faThumbsDown, faWallet, faSearch, faEnvelope, faLock, faFacebookF, faGooglePlusG)
  }
}
