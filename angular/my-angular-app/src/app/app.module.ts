import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { BannerComponent } from "./banner/banner.component";
import { BannerTextComponent } from "./banner-text/banner.text.component";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BannerComponent,
    BannerTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
