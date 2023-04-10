import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {

 @Input() blog: any ={};
 @Input() index:number=0; 
 //@Output() blogSeleccionado: EventEmitter<number>


  constructor( private router: Router){
  }

  verBlog(){
    this.router.navigate(['/blog',this.blog.id]);
    //this.blogSeleccionado.emit(this.index);
  }
}
