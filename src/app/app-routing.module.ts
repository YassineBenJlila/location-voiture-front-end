import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageComponent } from './content/public-page/public-page.component';

const routes: Routes = [
  {path:'welcome', component: PublicPageComponent},

  {path: '', redirectTo: 'welcome', pathMatch: 'full'},

  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
