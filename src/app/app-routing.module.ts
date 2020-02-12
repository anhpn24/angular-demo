import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { PhotoComponent } from './components/photo/photo.component';
import { BreweryComponent } from './components/brewery/brewery.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostComponent},
  {path: 'photos', component: PhotoComponent},
  {path: 'breweries', component: BreweryComponent},
  {path: 'contacts', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostComponent, PhotoComponent, 
  BreweryComponent, HomeComponent, ContactComponent];
