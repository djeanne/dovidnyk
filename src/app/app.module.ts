import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { EntryService } from './services/entry.service';
import { AddNewComponent } from './components/helpers/add-new/add-new.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AddEntryComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
