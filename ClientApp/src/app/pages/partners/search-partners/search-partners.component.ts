import { BaseComponent } from './../../../shared/components/base.component';
import { BroadcastService } from './../../../../services/brodcast.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PartnersResponse } from '../models/partners.responses';
import { PartnersService } from '../partners.service';
import { Injector } from '@angular/core';
import { RangeRequest } from '../models/partners.requests';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.scss']
})
export class SearchPartnersComponent extends BaseComponent<PartnersResponse []> implements OnInit {
  partnersResponses : PartnersResponse [];
  subscription :any;
  rangeRequest : RangeRequest = {range : 0  };
  
  @ViewChild('customersInRangeForm', { static: false }) customersInRangeForm: NgForm;
  constructor( _broadcastService : BroadcastService,
     _injector : Injector,
    public _partnersService : PartnersService) {
      super(_broadcastService,_injector);
     }

  ngOnInit(): void {
    this.search();  
  }
  search(){
    this.executeAction(()=>this._partnersService.search(),null,(data)=>this.searchSuccess(data.response));
  }
  searchSuccess(partnersResponses : PartnersResponse []){
    this.partnersResponses = partnersResponses;
  }
  
  onSubmit(){
    let form = this.customersInRangeForm.form;
    if(!this.isValid(form))
      return

    this.executeAction(()=>this._partnersService.searchWithinRange(this.rangeRequest.range),null,(data)=>this.searchSuccess(data.response));
  }

}
