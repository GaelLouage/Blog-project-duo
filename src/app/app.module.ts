import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FlexLayour Module
import { FlexLayoutModule } from '@angular/flex-layout';

//Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

//Blog Components
import { HomeComponent } from './home/home.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { BottomBlogComponent } from './bottom-blog/bottom-blog.component';
import { VideoComponent } from './video/video.component';
import { PartnersComponent } from './partners/partners.component';
import { RoundedSocialComponent } from './rounded-social/rounded-social.component';
import { BlogOneMainComponent } from './blog-one-main/blog-one-main.component';
import { LineheadersComponent } from './lineheaders/lineheaders.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { GameTipsComponent } from './game-tips/game-tips.component';
import { ImpressiesComponent } from './impressies/impressies.component';
import { BlogOneBottomLeftComponent } from './blog-one-bottom-left/blog-one-bottom-left.component';
import { BlogOneBottomRightComponent } from './blog-one-bottom-right/blog-one-bottom-right.component';
import { BlogBottomTopLeftComponent } from './blog-bottom-top-left/blog-bottom-top-left.component';
import { BlogBottomBottomLeftComponent } from './blog-bottom-bottom-left/blog-bottom-bottom-left.component';
import { BlogBottomMiddelTopComponent } from './blog-bottom-middel-top/blog-bottom-middel-top.component';
import { BlogBottomMiddelBottomComponent } from './blog-bottom-middel-bottom/blog-bottom-middel-bottom.component';
import { BlogBottomRightTopComponent } from './blog-bottom-right-top/blog-bottom-right-top.component';
import { BlogBottomRightBottomComponent } from './blog-bottom-right-bottom/blog-bottom-right-bottom.component';
import { MeestPopulaireComponent } from './meest-populaire/meest-populaire.component';
import { VideosComponent } from './videos/videos.component';
import { CommentVideoService } from './comment-video.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    MainSidenavComponent,
    MainFooterComponent,
    MainBlogComponent,
    NewGamesComponent,
    BottomBlogComponent,
    VideoComponent,
    PartnersComponent,
    RoundedSocialComponent,
    BlogOneMainComponent,
    LineheadersComponent,
    BlogOneComponent,
    GameTipsComponent,
    ImpressiesComponent,
    BlogOneBottomLeftComponent,
    BlogOneBottomRightComponent,
    BlogBottomTopLeftComponent,
    BlogBottomBottomLeftComponent,
    BlogBottomMiddelTopComponent,
    BlogBottomMiddelBottomComponent,
    BlogBottomRightTopComponent,
    BlogBottomRightBottomComponent,
    MeestPopulaireComponent,
    VideosComponent,
    PageNotFoundComponent,
    IndexComponent,
    TopComponent,
    AboutComponent,
    BlogPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSliderModule,
    FormsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSliderModule,

  ],
  providers: [CommentVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
