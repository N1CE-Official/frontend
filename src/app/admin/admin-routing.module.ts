import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AuthGuard } from '../auth/auth.guard';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFavoriteServicesComponent } from './components/user-favorite-services/user-favorite-services.component';
import { UserFavoritePostsComponent } from './components/user-favorite-posts/user-favorite-posts.component';
import { UserOrdersResolverService } from './resolvers/user-orders-resolver.service';
import { UserFavoriteServiceResolverService } from './resolvers/user-favorite-service-resolver.service';
import { UserFavoritePostsResolverService } from './resolvers/user-favorite-posts-resolver.service';
import { SubmitApplicationPage } from './components/selection-process/submit-application-page/submit-application-page.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'orders', component: UserOrdersComponent},
          {path: 'favorite-services', component: UserFavoriteServicesComponent},
          {path: 'favorite-posts', component: UserFavoritePostsComponent},
          {path: 'submit-application', component: SubmitApplicationPage},
          {
            path: '', component: AdminDashboardComponent, resolve: {
              orders: UserOrdersResolverService,
              favoriteServices: UserFavoriteServiceResolverService,
              favoritePosts: UserFavoritePostsResolverService
            }, data: {
              userId: 'Test User'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
