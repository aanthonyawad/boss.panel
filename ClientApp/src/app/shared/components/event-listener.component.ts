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
    _timer: NodeJS.Timeout;
    constructor(private dialog: MatDialog,
        private _broadcastService: BroadcastService,
        private _router: Router) {
    }
    ngOnInit(): void {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.show();
            }
            if (event instanceof NavigationEnd) {
                this.hide();
            }
        });

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
            if (event.key === Events.progressStarted) {
                this.show();
            }
            if (event.key === Events.progressEnded) {
                this.hide();
            }         
 

        });
    }

    show() {
        if (!this._showing) {
            this._showing = true;
            this._timer = setTimeout(() => {
                var element = document.getElementById('preloader');
                if (element.classList.contains('hide')) {
                    element.classList.remove('hide');
                    element.classList.add('show');

                }
            }, 3000);

        }
    }
    hide() {
        if (this._showing) {
            clearTimeout(this._timer);
            var element = document.getElementById('preloader');
            if (element.classList.contains('show')) {
                element.classList.remove('show');
                element.classList.add('hide');
            }
            this._showing = false;
        }
    }
}