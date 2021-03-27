import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { SearchPartnersComponent } from './search-partners/search-partners.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';

@NgModule({
  declarations: [SearchPartnersComponent, AddPartnerComponent],
  imports: [
    SharedModule,
    CommonModule,
    PartnersRoutingModule
  ]
})
export class PartnersModule { }
