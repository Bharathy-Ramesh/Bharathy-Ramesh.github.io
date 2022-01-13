import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { BooklistsComponent } from '../booklists/booklists.component';
import { ModuleserviceRoutingModule } from './moduleservice-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilteroptionPipe } from '../pipes/filteroption.pipe';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    BookdetailsComponent,
    BooklistsComponent,
    FilteroptionPipe,
    MainComponent
  ],
  imports: [
    CommonModule,
    ModuleserviceRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class ModuleserviceModule { }
