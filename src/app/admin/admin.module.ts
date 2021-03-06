import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFavoriteServicesComponent } from './components/user-favorite-services/user-favorite-services.component';
import { UserFavoritePostsComponent } from './components/user-favorite-posts/user-favorite-posts.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { PlatformModule } from '../public/platform/platform.module';
import { CommonModule } from '@angular/common';
import { BlogModule } from '../public/blog/blog.module';
import { CommonModule as CommonN1CEModule } from '../public/common/common.module';
import { SharedModule } from '../shared/shared.module';
import { PublicSharedModule } from '../public/shared/public.shared.module';
import { SubmitApplicationPage } from './components/selection-process/submit-application-page/submit-application-page.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    PlatformModule,
    CommonModule,
    BlogModule,
    CommonN1CEModule,
    SharedModule,
    PublicSharedModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    UserOrdersComponent,
    UserFavoriteServicesComponent,
    UserFavoritePostsComponent,
    OrderCardComponent,
    SubmitApplicationPage,
  ]
})
export class AdminModule {
}
