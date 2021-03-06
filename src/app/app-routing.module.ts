import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { PhotoComponent } from './components/photo/photo.component';
import { BreweryComponent } from './components/brewery/brewery.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BreweryDetailComponent } from './components/brewery-detail/brewery-detail.component';
import { DemoBootstrapComponent } from './components/demo-bootstrap/demo-bootstrap.component';

const routes: Routes = [
  { path: '', component: DemoBootstrapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotoComponent },
  { path: 'breweries/:id', component: BreweryDetailComponent },
  { path: 'breweries', component: BreweryComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'config', loadChildren: () => import('./configuration-point-plus/configuration-point-plus.module').then(m => m.ConfigurationPointPlusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostComponent, PhotoComponent,
  BreweryComponent, HomeComponent, ContactComponent, BreweryDetailComponent, DemoBootstrapComponent];
