import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { FloVideoAutoplayModule } from '@flosportsinc/ng-video-autoplay'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatVideoModule,
    BrowserAnimationsModule,
    FloVideoAutoplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
