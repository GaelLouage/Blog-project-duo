import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages And Hierarchy 
import { HomeComponent } from './home/home.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { BlogOneMainComponent } from './blog-one-main/blog-one-main.component';
import { GameTipsComponent } from './game-tips/game-tips.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { ImpressiesComponent } from './impressies/impressies.component';
import { BlogOneBottomLeftComponent } from './blog-one-bottom-left/blog-one-bottom-left.component';
import { BlogOneBottomRightComponent } from './blog-one-bottom-right/blog-one-bottom-right.component';
import { BlogBottomBottomLeftComponent } from './blog-bottom-bottom-left/blog-bottom-bottom-left.component';
import { BlogBottomTopLeftComponent } from './blog-bottom-top-left/blog-bottom-top-left.component';
import { BlogBottomMiddelBottomComponent } from './blog-bottom-middel-bottom/blog-bottom-middel-bottom.component';
import { BlogBottomMiddelTopComponent } from './blog-bottom-middel-top/blog-bottom-middel-top.component';
import { BlogBottomRightBottomComponent } from './blog-bottom-right-bottom/blog-bottom-right-bottom.component';
import { BlogBottomRightTopComponent } from './blog-bottom-right-top/blog-bottom-right-top.component';
import { VideosComponent } from './videos/videos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [{path: '', component: IndexComponent},
                                                  {path: 'index', component: IndexComponent},
                                                  {path: 'about', component: AboutComponent},
                                                  {path: 'blog',  component: MainBlogComponent },
                                                  {path:'blogOne' , component: BlogOneComponent},
                                                  {path:'gameTips' , component: GameTipsComponent},
                                                  {path:'impressies' , component: ImpressiesComponent},
                                                  {path:'Japan' , component: BlogOneBottomLeftComponent},
                                                  {path:'nieuws' , component: BlogOneBottomRightComponent},
                                                  // bottom container  blog
                                                  {path:'mario' , component: BlogBottomBottomLeftComponent},
                                                  {path:'dyinglight' , component: BlogBottomTopLeftComponent},
                                                  {path:'warzone' , component: BlogBottomMiddelTopComponent},
                                                  {path:'gta' , component: BlogBottomMiddelBottomComponent},
                                                  {path:'lol' , component: BlogBottomRightTopComponent},
                                                  {path:'halo' , component: BlogBottomRightBottomComponent},
                                                  {path: 'watchTube', component: VideosComponent},
                                                  { path: '**', component: PageNotFoundComponent}
                                                  ]},
                           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
