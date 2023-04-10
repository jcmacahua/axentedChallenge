import { Component } from '@angular/core';
import { Blogs } from 'src/app/interfaces/blogs.interface';
import { BlogsService } from 'src/app/servicios/blogs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  
  blogs: Blogs[]=[];
  indice: number=0;
  seleccionados: string[]=[];

  constructor(private _blogsService: BlogsService,
              private router: Router
              ){
              }
              
              ngOnInit(){
                this.blogs = this._blogsService.getBlogs();     
                this.indice= Number(this._blogsService.getIndex()) + 1;  
                  console.log('indice', this.indice);
      
  }

  saveBlogger(name:string, website:string, image: string, email:string){
    
    const item:any={
      id: this.indice.toString(),
      name: name,
      website: website,
      picture_url: image,
      email: email,
      friends: this.seleccionados
    }
    
    this._blogsService.setNewBlog(item);
    this.ngOnInit();
  }

  addFriend(event:any){
      console.log('event',event);
  }

}
