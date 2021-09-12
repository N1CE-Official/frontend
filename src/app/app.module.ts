import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogModule } from './public/blog/blog.module';
import { PlatformModule } from './public/platform/platform.module';
import { PublicSharedModule } from './public/shared/public.shared.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from './public/common/common.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BlogModule.forRoot(),
    PlatformModule.forRoot(),
    PublicSharedModule.forRoot(),
    SharedModule.forRoot(),
    CommonModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
