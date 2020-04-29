import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationPointPlusComponent } from './configuration-point-plus.component';

const routes: Routes = [{ path: '', component: ConfigurationPointPlusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationPointPlusRoutingModule { }
