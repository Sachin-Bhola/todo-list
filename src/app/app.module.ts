import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { RemainingTaskComponent } from './remaining-task/remaining-task.component';
import { CommpletedTaskComponent } from './commpleted-task/commpleted-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTaskComponent,
    RemainingTaskComponent,
    CommpletedTaskComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
