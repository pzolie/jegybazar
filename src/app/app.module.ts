import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { FooterComponent } from './core/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {EventService} from './shared/event.service';
import {UserService} from './shared/user.service';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EventService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
