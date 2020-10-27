import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      blogId: '1',
      lastModified: '2017-10-01T00:00:00',
      created: '2017-10-01T00:00:00',
      tags: [],
      author: 'Harsh',
      category: 'freestyle',
      isPublished: 'true',
      views: '0',
      bodyHtml: 'This is the first blog',
      description: 'Description of Blog',
      title: 'Hooray',
    },
    {
      blogId: '2',
      lastModified: '2017-10-01T00:00:00',
      created: '2017-10-01T00:00:00',
      tags: [],
      author: 'Admin',
      category: 'comedy',
      isPublished: 'true',
      views: '0',
      bodyHtml: 'Second Blog',
      description: 'D-2',
      title: 'Yippie',
    },
    {
      blogId: '3',
      lastModified: '2017-10-01T00:00:00',
      created: '2017-10-01T00:00:00',
      tags: [],
      author: 'Harsh',
      category: 'horror',
      isPublished: 'true',
      views: '0',
      bodyHtml: 'Third Blog',
      description: 'Nice D-3',
      title: 'Gee',
    },
  ];

  public currentBlog:any;
  
  
  constructor() { 
    console.log("Service Constructor called")
  }

  //method to return all blogs

  public getAllBlog():any{
    return this.allBlogs;
  }
 
  //method to return a particular blog
  public getSingleBlogInformation(currentBlogId):any{

    for (let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    return this.currentBlog;
  }




}
