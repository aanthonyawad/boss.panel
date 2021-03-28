import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { SearchPartnersComponent } from './search-partners/search-partners.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchPartnersComponent],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
