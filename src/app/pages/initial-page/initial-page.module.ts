import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialPageRoutingModule } from './initial-page-routing.module';
import { InitComponent } from './pages/init/init.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    InitComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    InitialPageRoutingModule
  ]
})
export class InitialPageModule { }
