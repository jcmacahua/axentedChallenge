import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs.interface';
import { BlogsService } from 'src/app/servicios/blogs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  blogs: Blogs []=[];
  busqueda: string='';

  constructor( private activatedRouter: ActivatedRoute,
              private _blogsService: BlogsService,
              private router:Router){    
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params=>{
      this.busqueda = params['buscarBlog'];
      this.blogs = this._blogsService.buscarBlogs(params['buscarBlog']);

    });
  }
  
}
