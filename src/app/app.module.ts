import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {AdminService} from './admin.service';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule,
    FormsModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material'
    } ),
    NgxPaginationModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
