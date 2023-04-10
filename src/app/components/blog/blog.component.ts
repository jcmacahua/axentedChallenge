import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/servicios/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blog: any = {};
  friends: any []= [];

  constructor(private activatedRoute:ActivatedRoute,
              private _blogsService:BlogsService){
    this.activatedRoute.params.subscribe(params=>{      
      this.blog = this._blogsService.getBlog(params['id'])      
    });

    if(this.blog.friends.length!==0){
      this.blog.friends.forEach((element: any) => {        
        this.friends.unshift(this._blogsService.getBlog(element))
      });      
    }

  }
}
