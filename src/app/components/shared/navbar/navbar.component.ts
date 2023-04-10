import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs.interface';
import { BlogsService } from 'src/app/servicios/blogs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  blogResults: Blogs[]=[];

  constructor(private router:Router){

  } 
  
  buscarBlog(buscarBlog:any){
    this.router.navigate(['/buscar',buscarBlog]);
  }
}
