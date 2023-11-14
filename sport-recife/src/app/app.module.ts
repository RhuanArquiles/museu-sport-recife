import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrophyComponent } from './trophy/trophy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    FooterComponent,
    TrophyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
