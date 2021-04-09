import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { BroadcastService, Events } from "src/services/brodcast.service";
import { ErrorComponent } from "../error.component";
import { ResponseMessage } from "../models/responseMessage.models";
import { SuccessComponent } from "../success.component";

@Component({
    selector: 'app-event-listener',
    template: ''
})
export class EventListenerComponent implements OnInit {
    _showing: boolean;
    _cancelShowing: boolean = false;
    constructor(private dialog: MatDialog,
        private _broadcastService: BroadcastService,
        private _router: Router) {
    }
    ngOnInit(): void {

        this._broadcastService.listenEvent().subscribe((event) => {

            if (event.key === Events.success) {
                this.dialog.open(SuccessComponent, {
                    width: '400px',
                    data: <ResponseMessage<null>>event.data
                });
            }
            if (event.key === Events.Failed) {
                this.dialog.open(ErrorComponent, {
                    width: '400px',
                    data: <ResponseMessage<null>>event.data
                });
            }         
 

        });
    }

}