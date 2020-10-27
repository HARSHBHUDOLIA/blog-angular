import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import {Location} from '@angular/common'



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {
 
  public currentBlog;

 


  


  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService,public location: Location) { }
  

  public deleteThisBlog():any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        console.log(error.errorMessage);
        console.log('error occured');

      
      }
    )
  }

  public goBackToPreviousPage():any {
    this.location.back();
  }
  ngOnInit(): void {
    
    //Let me get the blogID 
      console.log("ngintcalled")
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    
     console.log(myBlogId);
     this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
       data =>{
         this.currentBlog=data['data']
         console.log(data);
       },
       error =>{
         console.log(error.errorMessage);
         console.log('we got an error');
       } 
       
       
     )
  }

  

}
