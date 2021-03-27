import { AddPartnerComponent } from './add-partner/add-partner.component';
import { SearchPartnersComponent } from './search-partners/search-partners.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchPartnersComponent },
  { path: 'add', component: AddPartnerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
