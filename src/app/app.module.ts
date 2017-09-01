import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './api-service/api.service';
import { HttpModule, Http } from '@angular/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    CreateUserModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
