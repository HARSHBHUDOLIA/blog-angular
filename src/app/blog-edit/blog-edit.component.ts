import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog:any;
  public possibleCategories=['Comedy','Drama','Action','Technology'];
  constructor(private blogHttpService: BlogHttpService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        this.currentBlog=data['data']
        console.log(data);
        console.log(this.currentBlog);
      },
      error =>{
        console.log(error.errorMessage);
        console.log('we got an error');
      } 
      )
  }

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.BlogId,this.currentBlog).subscribe(
      data =>{
       console.log(data);
       setTimeout(() => {
         this.router.navigate(['/blog',this.currentBlog.BlogId])
       })
      },
      error =>{
        console.log(error.errorMessage);
        console.log('we got an error');
      } 
      )
  }

}
