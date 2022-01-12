import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistsComponent } from './booklists/booklists.component';

const routes: Routes = [
  {
  path:'bookdetail', component:BookdetailsComponent
  },
  {
  path:'booklist', component:BooklistsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
