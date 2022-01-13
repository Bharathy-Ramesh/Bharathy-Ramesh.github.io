import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { BooklistsComponent } from '../booklists/booklists.component';
import { MainComponent } from './main/main.component'


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:':id/bookdetail', component:BookdetailsComponent
      },
      {
        path:'', component:BooklistsComponent        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleserviceRoutingModule { }
