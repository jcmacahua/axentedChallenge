//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { BlogsService } from './servicios/blogs.service';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    BlogComponent,
    BuscadorComponent,
    BlogCardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,    
    APP_ROUTING
  ],
  providers: [
    BlogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
