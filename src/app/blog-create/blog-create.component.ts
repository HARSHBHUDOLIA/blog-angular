import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router) { 
    
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories=['comedy','drama','action','Technology'];

  ngOnInit(): void {
  }

  public createBlog():any{
    let blogdata:any ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }
    console.log(blogdata)

    this.blogHttpService.createBlog(blogdata).subscribe(
      data=>{
        console.log(data)
        console.log('Blog created')
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        },1000)
      },
      error=>{
        console.log(error.errorMessage);
        console.log('Error occurred');
        
      }
    )
  }
  
  

}
