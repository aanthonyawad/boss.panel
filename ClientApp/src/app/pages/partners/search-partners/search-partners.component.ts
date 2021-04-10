import { BaseComponent } from './../../../shared/components/base.component';
import { BroadcastService } from './../../../../services/brodcast.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PartnersResponse } from '../models/partners.responses';
import { PartnersService } from '../partners.service';
import { Injector } from '@angular/core';
import { RangeRequest } from '../models/partners.requests';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.scss']
})
export class SearchPartnersComponent extends BaseComponent<PartnersResponse []> implements OnInit {
  partnersResponses : PartnersResponse [];
  subscription :any;
  rangeRequest : RangeRequest = {range : 0  };
  pageSize : number = 5;
  pageIndex : number = 0;
  totalRecords : number;
  areUserReset : boolean = true;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
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
    this.areUserReset = true;
    let skip = 0;
    if(this.pageIndex > 0){
      skip = this.pageSize * this.pageIndex;
    }
    this.executeAction(()=>this._partnersService.search(skip, this.pageSize),null,(data)=>this.searchSuccess(data.response));
  }
  searchSuccess(partnersResponses : PartnersResponse []){
    this.partnersResponses = partnersResponses;
    this.totalRecords = partnersResponses.length;
  }
  
  onSubmit(){
    
    let skip = 0;
    if(this.pageIndex > 0){
      skip = this.pageSize * this.pageIndex;
    }
    let form = this.customersInRangeForm.form;
    if(!this.isValid(form))
      return;

    this.areUserReset = false;
    this.executeAction(()=>this._partnersService.searchWithinRange(this.rangeRequest.range,
    skip,this.pageSize),null,(data)=>this.searchSuccess(data.response));
  }
  pageSizeChanged(event : any){

    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    if(this.areUserReset)
      this.search();
    else
      this.onSubmit();
  }
}
