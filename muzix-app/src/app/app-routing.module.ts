import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardcomponentComponent } from './trackmodule/cardcomponent/cardcomponent.component';
import { WishlistcomponentComponent } from './trackmodule/wishlistcomponent/wishlistcomponent.component';
import { PagenotfoundcomponentComponent } from './trackmodule/pagenotfoundcomponent/pagenotfoundcomponent.component';
import { CardcontainercomponentComponent } from './trackmodule/cardcontainercomponent/cardcontainercomponent.component';

const routes: Routes = [
  {
    path: '',
    component: CardcomponentComponent,
    data: {country: 'India'}
  },
 // {
   // path: '',
   // component: CardcomponentComponent,
   // data: {country: 'Australia'}
 // }
  { path: '', redirectTo: '/track', pathMatch: 'full' },
  { path: 'track', component: CardcomponentComponent },
  { path: 'wishlist', component: WishlistcomponentComponent },
  {path: '**', component: PagenotfoundcomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
