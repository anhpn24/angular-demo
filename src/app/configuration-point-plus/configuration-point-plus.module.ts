import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationPointPlusRoutingModule } from './configuration-point-plus-routing.module';
import { ConfigurationPointPlusComponent } from './configuration-point-plus.component';
import { ConfigSearchPageComponent } from './pages/config-search-page/config-search-page.component';


@NgModule({
  declarations: [ConfigurationPointPlusComponent, ConfigSearchPageComponent],
  imports: [
    CommonModule,
    ConfigurationPointPlusRoutingModule
  ]
})
export class ConfigurationPointPlusModule { }
