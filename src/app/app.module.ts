import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemePanelComponent } from './theme-panel/theme-panel.component';
import { SmLoginComponent } from './sm-login/sm-login.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSiderbarComponent } from './dashboard-siderbar/dashboard-siderbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePanelComponent,
    routingComponent,
    SmLoginComponent,
    DashboardHeaderComponent,
    DashboardSiderbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
