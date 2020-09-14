import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService }  from './data.service';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import { NewComponent } from './new/new.component';





@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    DialogOverviewExampleDialog,
    NewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }),
    BrowserAnimationsModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
