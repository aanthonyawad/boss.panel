import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [TopBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
