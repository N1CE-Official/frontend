import { ModuleWithProviders, NgModule } from '@angular/core';
import { PublicSharedModule } from '../shared/public.shared.module';
import { ExpertDetailComponent } from './components/expert-detail/expert-detail.component';
import { BlogModule } from '../blog/blog.module';
import { PlatformModule } from '../platform/platform.module';

@NgModule({
  imports: [PublicSharedModule, BlogModule, PlatformModule],
  declarations: [ExpertDetailComponent,],
  exports: [ExpertDetailComponent,],
  entryComponents: [ExpertDetailComponent,]
})

export class CommonModule {
  static forRoot(): ModuleWithProviders<CommonModule> {
    return {
      ngModule: CommonModule,
      providers: []
    };
  }
}
