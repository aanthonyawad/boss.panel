import { BaseComponent } from './../../../shared/components/base.component';
import { BroadcastService } from './../../../../services/brodcast.service';
import { Component, OnInit } from '@angular/core';
import { PartnersResponse } from '../models/partners.responses';
import { PartnersService } from '../partners.service';
import { Injector } from '@angular/core';

@Component({
  selector: 'app-search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.scss']
})
export class SearchPartnersComponent extends BaseComponent implements OnInit {
  partnersResponses : PartnersResponse [];
  subscription :any;

  constructor( _broadcastService : BroadcastService,
     _injector : Injector,
    public _partnersService : PartnersService) {
      super(_broadcastService,_injector);
     }

  ngOnInit(): void {
    this.search();  
  }
  search(){
    this.executeAction(()=>this._partnersService.search(),null,(data)=>this.searchSuccess(data));
  }
  searchSuccess(partnersResponses : PartnersResponse []){
    this.partnersResponses = partnersResponses;
  }
  
  onSubmit(){
    
    this.executeAction(()=>this._partnersService.search(),null,(data)=>this.searchSuccess(data));
  }

}
