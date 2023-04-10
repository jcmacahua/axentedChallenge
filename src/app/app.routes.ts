import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'blog/:id', component: BlogComponent},
    {path: 'buscar/:buscarBlog', component: BuscadorComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);