
import { Injectable } from '@angular/core';
import { Blogs } from '../interfaces/blogs.interface';

@Injectable()
export class BlogsService {

    private blogs: Blogs[]=[
        {
          id: "1",
          name: "Juan Perez",
          website: "juanperez.io",
          picture_url: "https://placekitten.com/200/300",
          email: "conact@juanperez.io",
          friends: []
        },
        {
          id: "2",
          name: "Amano Pikamee",
          website: "pikamee.io",
          picture_url: "https://placekitten.com/200/300",
          email: "contact@pikamee.io",
          friends: ["1"]
        },
        {
            id: "3",
            name: "Tony Stark",
            website: "tonystark.io",
            picture_url: "https://placekitten.com/200/300",
            email: "contact@tonystark.io",
            friends: ["1", "2"]
        }
    ]

    private _blogStorage:Blogs[]=[];
    private _indexStorage:string='';
    
    constructor(){
        console.log('servicio iniciado');
        if(localStorage.getItem('blogs')){
            this._blogStorage = JSON.parse(localStorage.getItem('blogs')!)
            this._indexStorage = localStorage.getItem('index')!;
        }else{
            localStorage.setItem('blogs',JSON.stringify(this.blogs));            
            this._indexStorage = this.blogs.length.toString();
            localStorage.setItem('index',this._indexStorage);
            this._blogStorage = JSON.parse(localStorage.getItem('blogs')!)
            this._indexStorage = localStorage.getItem('index')!;            
        }

    }
 
    getBlogs():Blogs[]{
        //return this.blogs;
        return [...this._blogStorage];
    }

    getBlog(index:string){
        let result: any;
        //result = this.blogs.find(value=>value.id===index);
        result = this._blogStorage.find(value=>value.id===index);
        return result;
    }

    getIndex():string{

        return this._indexStorage;
    }

    buscarBlogs(busqueda:string):Blogs[]{
        let blogsArr:Blogs[]=[];

        busqueda =  busqueda.toLocaleLowerCase();
        
        for(let blog of this._blogStorage){
            let name = blog.name.toLocaleLowerCase();
            let site = blog.website.toLocaleLowerCase();
            
            if(name.indexOf(busqueda)>=0 || site.indexOf(busqueda)>=0){
                blogsArr.push(blog);
            }            
        }
        return blogsArr;
    }
    
    setNewBlog(item:any){
        this._blogStorage.push(item);
        localStorage.setItem('blogs',JSON.stringify(this._blogStorage));
        this._blogStorage = JSON.parse(localStorage.getItem('blogs')!)
        
        localStorage.setItem('index',this._blogStorage.length.toString());
        this._indexStorage = localStorage.getItem('index')!;
    }
}