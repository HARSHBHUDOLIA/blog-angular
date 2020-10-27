import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//router module used to set up application level routes,{this is also a statement written by me}
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//This is generated from ng g cpmponent <Component Name>
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';

//import statements written for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';

//This here also is automatically added, this is a decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'',redirectTo: 'home', pathMatch: 'full'},
      {path:'about', component: AboutComponent},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'create', component:BlogCreateComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'**', component:NotFoundComponent}
      // {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
