import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user/user-modal/user-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
