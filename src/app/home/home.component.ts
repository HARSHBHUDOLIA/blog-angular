//This is a by default statement that comes with every component. Consider it as header files.
import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';


//this decorator is enabling the class to become a part of angular framework.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// a simple class
export class HomeComponent implements OnInit {


  public allBlogs=[];
  constructor(public blogHttpService: BlogHttpService) { }

  

  ngOnInit(): void { 

    // this.allBlogs=this.blogHttpService.getAllBlog();
    console.log(this.allBlogs)
    this.allBlogs=this.blogHttpService.getAllBlog().subscribe(
      data =>{
        console.log("logging data");
        console.log(data);
        this.allBlogs=data['data']
      }
      )
      error =>{
        console.log('Some Error Occured')
        console.log(error.errorMessage);
      }


  }
}
