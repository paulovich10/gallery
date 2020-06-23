import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortraitComponent } from './portrait/portrait.component';
import { StreetComponent } from './street/street.component';
import { StudioComponent } from './studio/studio.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';


const routes: Routes = [

  { path: '', redirectTo: 'portrait', pathMatch: 'full' },
  { path: 'portrait', component: PortraitComponent },
  { path: 'street', component: StreetComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'outdoors', component: OutdoorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
