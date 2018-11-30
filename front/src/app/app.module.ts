import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxAlertsModule } from "@ngx-plus/ngx-alerts";
import { ConfigComponent } from "./config/config.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatIconModule } from "@angular/material";

@NgModule({
    declarations: [AppComponent, ConfigComponent, HomeComponent, PageNotFoundComponent, NavbarComponent],
    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        NgxAlertsModule.forRoot(),
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
