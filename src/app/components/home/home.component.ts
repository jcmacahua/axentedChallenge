import { Component } from '@angular/core';
import { BlogsService } from 'src/app/servicios/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _blogsService:BlogsService){
    
  }
  ngOnInit() {
    
  }
}
