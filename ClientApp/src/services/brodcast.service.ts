import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface IBroadcastEvent {
  key: any;
  data?: any;
}

export const Events = {
  progressStarted: "ProgressStarted",
  progressEnded: "ProgressEnded",
  success:"Success",
  Failed:"Failed",
  Confirm:"Confirm",  
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private _eventBus: Subject<IBroadcastEvent>;  

  constructor() {
    this._eventBus = new Subject<IBroadcastEvent>();
  }

  progressStarted(data?: any) {
    this.broadcast(Events.progressStarted, data);
  }

  progressEnded(data?: any) {
    this.broadcast(Events.progressEnded, data);
  }

  success(data?: any) {
    this.broadcast(Events.success, data);
  }
   
  failed(data?: any) {
    this.broadcast(Events.Failed, data);
  }

  confirm(data: any) {
    this.broadcast(Events.Confirm, data);
  }   
  
  broadcast(key: any, data?: any) {
    this._eventBus.next({ key, data });
  }

  listenEvent(): Observable<IBroadcastEvent> {
    return this._eventBus.asObservable();
  }
  

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable().pipe(filter(e=>e.key === key), map(event =><T>event.data));   
  }

}
