import { Component, OnInit } from '@angular/core';
import { PartnersResponse } from '../models/partners.responses';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.scss']
})
export class SearchPartnersComponent implements OnInit {
  partnersResponses : PartnersResponse [];
  subscription :any;

  constructor(public _partnersService : PartnersService) { }

  ngOnInit(): void {
    this.subscription = this._partnersService.search().subscribe(data =>{
      this.partnersResponses = data;
    });
  }
  
  showParnternsInRange(){

  }

}
