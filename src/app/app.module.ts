import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './component/intro/intro.component';
import { CapituloComponent } from './component/capitulo/capitulo.component';
import { SubcapituloComponent } from './component/subcapitulo/subcapitulo.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CapituloComponent,
    SubcapituloComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
