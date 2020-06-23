import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortraitComponent } from './portrait/portrait.component';
import { StudioComponent } from './studio/studio.component';
import { StreetComponent } from './street/street.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PortraitComponent,
    StudioComponent,
    StreetComponent,
    OutdoorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
