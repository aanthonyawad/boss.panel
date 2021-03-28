import { FormGroup } from '@angular/forms';
import { Component, Injector, OnDestroy } from '@angular/core';
import { ResponseMessage } from '../models/responseMessage.models';
import { BroadcastService } from 'src/services/brodcast.service';
@Component({
  template: ''
})
export class BaseComponent<T> implements OnDestroy {
  progressing: boolean;
  message: string ;
  errors: any;
  showErrors: boolean;
  broadCastSuccess: boolean = true;
  _lastResponseMessage: ResponseMessage<T>;
  _actionSubscription: any;

  constructor(private _broadCastService: BroadcastService, private _injector: Injector) {
    
  }


  startProgress(): void {
    this.progressing = true;
    this._broadCastService.progressStarted();
  }

  endProgress(): void {
    this.progressing = false;
    this._broadCastService.progressEnded();
  }

  handleSuccess(data: any, callBackOnSuccess: Function): void {
    this.message = data.successMessage;
    if (callBackOnSuccess !== null) {
         callBackOnSuccess(data);
     }
    this.endProgress();
    if (this.broadCastSuccess) {
      this._broadCastService.success(data);
    }
  }

  handleErrors(message: ResponseMessage<T>, form: FormGroup, callBackOnError: Function): void {
    this.endProgress();
    if (callBackOnError !== null) {
      callBackOnError(message, form);
    }
    if (message.isHandled) {
      return;
    }
    //TODO
  }

  isValid(form: FormGroup): boolean {
    this.clearServerErrors(form);
    this.showErrors = false;
    if (!form.valid) {
      this.showErrors = true;
      return false;
    }

    return true;
  }

  clearServerErrors(form: FormGroup) {
    if (this._lastResponseMessage === null || this._lastResponseMessage === undefined) {
      return;
    }
    var message = this._lastResponseMessage;
    Object.keys(message.validationErrors).forEach(prop => {
      const formControl = form.controls[prop];
      if (formControl) {
        // activate the error message
        formControl.setErrors(null);
      }
    });
  }

  clearAllErrors(form: FormGroup){
    Object.keys(form.controls).forEach(prop => {
      const formControl = form.controls[prop];
      if (formControl) {
      
          formControl.setErrors(null);       
      }
    });
  }

  handleValidationErrors(message: ResponseMessage<T>, form: FormGroup) {
    this._lastResponseMessage = message;
    if (message.statusCode === 422) {
      Object.keys(message.validationErrors).forEach(prop => {
        const formControl = form.controls[prop];
        if (formControl) {
          // activate the error message
          formControl.setErrors({
            serverError: message.validationErrors[prop]
          });
        }
      });
    }
  }

  setError(control :string, errorMessage:string, form:FormGroup){
    const formControl = form.controls[control];
    if (formControl) {   
      formControl.setErrors({
        serverError: [errorMessage]
      });
    }
  }

  setErrorByType(control :string, errorMessage:string, form:FormGroup, errorType:string){
    const formControl = form.controls[control];
    if (formControl) {   
      formControl.setErrors({
        errorType: [control, errorMessage]
      });
    }
  }

  executeAction(action: Function, form: FormGroup, callBackOnSuccess: Function = null, callBackOnError: Function = null) {
    this.message = "";
    this.startProgress();
    this._actionSubscription = action().subscribe((data: any) => this.handleSuccess(data, callBackOnSuccess), (data: any) => this.handleErrors(data, form, callBackOnError));
  }

  ngOnDestroy(): void {
    if (this._actionSubscription) {
      this._actionSubscription.unsubscribe();
    }
  }

  boolYesNoFormatter(bool : boolean) : string{   
    if(bool == null || !bool)
      return "No";
    return "Yes";
  }

  dateToIsoFormat(date : string){
    var d = new Date(date);
    var month = d.getMonth() >= 10 ? d.getMonth() : '0'+d.getMonth() ;
    return d.getFullYear()+'-'+month+'-'+d.getDate();

  }
}
