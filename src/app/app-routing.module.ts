import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { AfficherVideosComponent } from './afficher-videos/afficher-videos.component';

const routes: Routes = [
  {path:'add',component:AddVideoComponent},
  {path:'afficher',component:AfficherVideosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
