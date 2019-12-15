import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { DynamiccontrolComponent } from './components/dynamiccontrol/dynamiccontrol.component';
import { RelatedvideosComponent } from './components/relatedvideos/relatedvideos.component';
import { CommoncontrolComponent } from './common/commoncontrol/commoncontrol.component';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [
  { path: '', component: RelatedvideosComponent },
  { path: 'registerform', component: RegisterformComponent },
  { path: 'dynamiccontrol', component: DynamiccontrolComponent },
  { path: 'commoncontrol', component: CommoncontrolComponent },
  { path: 'tutorials', component: RelatedvideosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'home', component: RelatedvideosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
