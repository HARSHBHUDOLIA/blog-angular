import { Injectable } from '@angular/core';
//importing http client
import { HttpClient,HttpErrorResponse} from '@angular/common/http'

import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs'
  public authToken='YjI1YzNiNjllOTg4MTBlNDA4NTM2ZjhlMjIwMTdiZjUyNjZjOTM4MDY2NTE1ZWM5OTYzMmM3MmQ3YmEzMzdlM2M3YWQwOGJkNDVhYzBkYzRiZWE4ZDZlOWNiYjNkN2ZjNzEyYmMzY2U5YzliNzczNzdlMjRkNDVlM2VjMzUzYTM4OQ=='
  constructor(private _http:HttpClient) {
    console.log('service-http constructor is called');
   }
  
   //This will be used to handle errors(exception Handler),try writing same code for all services making HTTP requests
  private handleError(err:HttpErrorResponse){
    console.log('Handle Error HTTP calls');
    console.log(err.message);
    return Observable.throw(err.message);
    
  }

  public getAllBlog():any{
    let myResponse=this._http.get(this.baseUrl+'/all?authToken=YjI1YzNiNjllOTg4MTBlNDA4NTM2ZjhlMjIwMTdiZjUyNjZjOTM4MDY2NTE1ZWM5OTYzMmM3MmQ3YmEzMzdlM2M3YWQwOGJkNDVhYzBkYzRiZWE4ZDZlOWNiYjNkN2ZjNzEyYmMzY2U5YzliNzczNzdlMjRkNDVlM2VjMzUzYTM4OQ==');
    console.log(myResponse);
    return myResponse;
  }
 
  //method to return a particular blog
  public getSingleBlogInformation(currentBlogId):any{

    let myResponse=this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken=YjI1YzNiNjllOTg4MTBlNDA4NTM2ZjhlMjIwMTdiZjUyNjZjOTM4MDY2NTE1ZWM5OTYzMmM3MmQ3YmEzMzdlM2M3YWQwOGJkNDVhYzBkYzRiZWE4ZDZlOWNiYjNkN2ZjNzEyYmMzY2U5YzliNzczNzdlMjRkNDVlM2VjMzUzYTM4OQ==');
    return myResponse;
}
  public createBlog(blogData):any{
    let myResponse= this._http.post(this.baseUrl+'/create'+'?authToken'+this.authToken,blogData)
    return myResponse;
  }
  public deleteBlog(blogId):any{
    let data={}
    let myResponse= this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken'+this.authToken,data)
    return myResponse;
  }
  public editBlog(blogId,blogData):any{
    let myResponse= this._http.post(this.baseUrl+'/'+blogId+'/edit'+'?authToken'+this.authToken,blogData)
    return myResponse;
  }
}
