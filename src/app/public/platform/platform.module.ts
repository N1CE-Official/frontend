import { ModuleWithProviders, NgModule } from '@angular/core';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CatalogHomeComponent } from './components/catalog-home/catalog-home.component';
import { PlatformCategoryComponent } from './components/platform-category/platform-category.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { PublicSharedModule } from '../shared/public.shared.module';

@NgModule({
  imports: [PublicSharedModule],
  declarations: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,],
  exports: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,],
  entryComponents: [ServiceCardComponent,
    CatalogHomeComponent,
    PlatformCategoryComponent,
    ServiceListComponent,
    CatalogFiltersComponent,]
})

export class PlatformModule {
  static forRoot(): ModuleWithProviders<PlatformModule> {
    return {
      ngModule: PlatformModule,
      providers: []
    };
  }
}
