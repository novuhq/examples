import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NotificationCenterModule } from '@novu/notification-center-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NotificationCenterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
