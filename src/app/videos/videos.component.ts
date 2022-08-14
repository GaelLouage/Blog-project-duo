import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentVideoService } from '../comment-video.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  iframes:any = [
    {id:0,title:"Dying Light", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"DYING LIGHT 2 Walkthrough Gameplay Part 46 - MIA & AIDEN (FULL GAME)", image:"https://images2.alphacoders.com/926/thumb-1920-926738.jpg", weergaven:303, date:this.getTime()},
    {id:1,title:"Warzone", video:"https://www.youtube.com/embed/edl5smSEgoE?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"the NEW WARZONE SEASON 2 UPDATE is..", image:"https://images.hdqwalls.com/wallpapers/call-of-duty-warzone-outbreak-4k-li.jpg", weergaven:2 , date:this.getTime()},
    {id:2,title:"GTA 6", video:"https://www.youtube.com/embed/vC1ftlcbmFM?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"HUGE UPDATE! GTA 6 Voice Actor LEAKS...NEW Trailer This Month, Release Date & MORE! (GTA VI)", image:"https://media.1815.io/topgear/i/full/2019/10/gta-vi-2.jpg", weergaven:5125 , date:this.getTime()},
    {id:3,title:"Pokemon", video:"https://www.youtube.com/embed/ERAhGia6azE?autoplay=1&cc_load_policy=1", info: "Want a sneak peek at how your adventure in the Hisui region will look, Trainers? 🤩Check out this new gameplay preview ahead of the release of Pokémon Legends: Arceus on  ",tekst:"Pokémon Legends: Arceus | Gameplay Preview", image:"https://wallpaperaccess.com/full/20994.jpg", weergaven:56 , date:this.getTime()},
    {id:4,title:"Rainbow six Extraction 7", video:"https://www.youtube.com/embed/0yeB4T0PoYY?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"Rainbow Six Extraction: 7 Minutes of Exclusive Gameplay",image:"https://s2.gaming-cdn.com/images/products/406/orig/jeu-uplay-tom-clancys-rainbow-six-siege-cover.jpg", weergaven:513 , date:this.getTime()},
    {id:5,title:"League of Legends", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Super Funny Moments, Best Fails and WTF Iron Plays in a League of Legends / LoL Funniest Fail Compilation",tekst:"I LOVE MY TEAMMATES 🙂 FUNNIEST FAILS COMPILATION (League of Legends)", image:"https://images4.alphacoders.com/600/thumb-1920-600528.png", weergaven:213 , date:this.getTime()},
    {id:0,title:"Dying Light", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"DYING LIGHT 2 Walkthrough Gameplay Part 46 - MIA & AIDEN (FULL GAME)", image:"https://images2.alphacoders.com/926/thumb-1920-926738.jpg", weergaven:7856 , date:this.getTime()},
    {id:1,title:"Warzone", video:"https://www.youtube.com/embed/edl5smSEgoE?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"the NEW WARZONE SEASON 2 UPDATE is..", image:"https://images.hdqwalls.com/wallpapers/call-of-duty-warzone-outbreak-4k-li.jpg", weergaven:512 , date:this.getTime()},
    {id:2,title:"GTA 6", video:"https://www.youtube.com/embed/vC1ftlcbmFM?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"HUGE UPDATE! GTA 6 Voice Actor LEAKS...NEW Trailer This Month, Release Date & MORE! (GTA VI)", image:"https://media.1815.io/topgear/i/full/2019/10/gta-vi-2.jpg", weergaven:456 , date:this.getTime()},
    {id:3,title:"Pokemon", video:"https://www.youtube.com/embed/ERAhGia6azE?autoplay=1&cc_load_policy=1", info: "Want a sneak peek at how your adventure in the Hisui region will look, Trainers? 🤩Check out this new gameplay preview ahead of the release of Pokémon Legends: Arceus on  ",tekst:"Pokémon Legends: Arceus | Gameplay Preview", image:"https://wallpaperaccess.com/full/20994.jpg",weergaven:456 , date:this.getTime()},
    {id:4,title:"Rainbow six Extraction 7", video:"https://www.youtube.com/embed/0yeB4T0PoYY?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"Rainbow Six Extraction: 7 Minutes of Exclusive Gameplay",image:"https://s2.gaming-cdn.com/images/products/406/orig/jeu-uplay-tom-clancys-rainbow-six-siege-cover.jpg", weergaven:512 , date:this.getTime()},
    {id:5,title:"League of Legends", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Super Funny Moments, Best Fails and WTF Iron Plays in a League of Legends / LoL Funniest Fail Compilation",tekst:"I LOVE MY TEAMMATES 🙂 FUNNIEST FAILS COMPILATION (League of Legends)", image:"https://images4.alphacoders.com/600/thumb-1920-600528.png", weergaven:512 , date:this.getTime()},
    {id:0,title:"Dying Light", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"DYING LIGHT 2 Walkthrough Gameplay Part 46 - MIA & AIDEN (FULL GAME)", image:"https://images2.alphacoders.com/926/thumb-1920-926738.jpg", weergaven:512 , date:this.getTime()},
    {id:1,title:"Warzone", video:"https://www.youtube.com/embed/edl5smSEgoE?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"the NEW WARZONE SEASON 2 UPDATE is..", image:"https://images.hdqwalls.com/wallpapers/call-of-duty-warzone-outbreak-4k-li.jpg", weergaven:512 , date:this.getTime()},
    {id:2,title:"GTA 6", video:"https://www.youtube.com/embed/vC1ftlcbmFM?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"HUGE UPDATE! GTA 6 Voice Actor LEAKS...NEW Trailer This Month, Release Date & MORE! (GTA VI)", image:"https://media.1815.io/topgear/i/full/2019/10/gta-vi-2.jpg", weergaven:512 , date:this.getTime()},
    {id:3,title:"Pokemon", video:"https://www.youtube.com/embed/ERAhGia6azE?autoplay=1&cc_load_policy=1", info: "Want a sneak peek at how your adventure in the Hisui region will look, Trainers? 🤩Check out this new gameplay preview ahead of the release of Pokémon Legends: Arceus on  ",tekst:"Pokémon Legends: Arceus | Gameplay Preview", image:"https://wallpaperaccess.com/full/20994.jpg", weergaven:512 , date:this.getTime()},
    {id:4,title:"Rainbow six Extraction 7", video:"https://www.youtube.com/embed/0yeB4T0PoYY?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"Rainbow Six Extraction: 7 Minutes of Exclusive Gameplay",image:"https://s2.gaming-cdn.com/images/products/406/orig/jeu-uplay-tom-clancys-rainbow-six-siege-cover.jpg", weergaven:512 , date:this.getTime()},
    {id:5,title:"League of Legends", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Super Funny Moments, Best Fails and WTF Iron Plays in a League of Legends / LoL Funniest Fail Compilation",tekst:"I LOVE MY TEAMMATES 🙂 FUNNIEST FAILS COMPILATION (League of Legends)", image:"https://images4.alphacoders.com/600/thumb-1920-600528.png", weergaven:512 , date:this.getTime()},
    {id:0,title:"Dying Light", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"DYING LIGHT 2 Walkthrough Gameplay Part 46 - MIA & AIDEN (FULL GAME)", image:"https://images2.alphacoders.com/926/thumb-1920-926738.jpg", weergaven:512 , date:this.getTime()},
    {id:1,title:"Warzone", video:"https://www.youtube.com/embed/edl5smSEgoE?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"the NEW WARZONE SEASON 2 UPDATE is..", image:"https://images.hdqwalls.com/wallpapers/call-of-duty-warzone-outbreak-4k-li.jpg", weergaven:512 , date:this.getTime()},
    {id:2,title:"GTA 6", video:"https://www.youtube.com/embed/vC1ftlcbmFM?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"HUGE UPDATE! GTA 6 Voice Actor LEAKS...NEW Trailer This Month, Release Date & MORE! (GTA VI)", image:"https://media.1815.io/topgear/i/full/2019/10/gta-vi-2.jpg", weergaven:512 , date:this.getTime()},
    {id:3,title:"Pokemon", video:"https://www.youtube.com/embed/ERAhGia6azE?autoplay=1&cc_load_policy=1", info: "Want a sneak peek at how your adventure in the Hisui region will look, Trainers? 🤩Check out this new gameplay preview ahead of the release of Pokémon Legends: Arceus on  ",tekst:"Pokémon Legends: Arceus | Gameplay Preview", image:"https://wallpaperaccess.com/full/20994.jpg", weergaven:512 , date:this.getTime()},
    {id:4,title:"Rainbow six Extraction 7", video:"https://www.youtube.com/embed/0yeB4T0PoYY?autoplay=1&cc_load_policy=1", info: "Dying Light 2 Walkthrough Gameplay Part 46 includes a Review and Campaign Mission 46 with Full Game Gameplay on PS5, PlayStation 5, Xbox Series X, XSX, Xbox Series S and PC. My 2022 Dying Light 2 Stay Human Gameplay Walkthrough will feature the Full Game Story ",tekst:"Rainbow Six Extraction: 7 Minutes of Exclusive Gameplay",image:"https://s2.gaming-cdn.com/images/products/406/orig/jeu-uplay-tom-clancys-rainbow-six-siege-cover.jpg", weergaven:512 , date:this.getTime()},
    {id:5,title:"League of Legends", video:"https://www.youtube.com/embed/4vbrUuwYhOU?autoplay=1&cc_load_policy=1", info: "Super Funny Moments, Best Fails and WTF Iron Plays in a League of Legends / LoL Funniest Fail Compilation",tekst:"I LOVE MY TEAMMATES 🙂 FUNNIEST FAILS COMPILATION (League of Legends)", image:"https://images4.alphacoders.com/600/thumb-1920-600528.png"},
  ];
  weergavenV:number = this.iframes[0].weergaven;
  datum:any = this.iframes[0].date;
  getTime():any {
    let today = new Date();
   return  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();;
  }
 
  incrementViews(index:number) {
    this.iframes[index].weergaven++;
    this.weergavenV = this.iframes[index].weergaven;
    this.datum = this.iframes[index].date;
  }
  users =  this.comment.usersComments;
   currentInfo:string = this.iframes[0].info;
  currentVideo:string = this.iframes[0].video;
  currentTitle:string = this.iframes[0].tekst;

 
  changeVideo(index:number) {
    this.currentInfo = this.iframes[index].info;
    this.currentVideo = this.iframes[index].video;
    this.currentTitle = this.iframes[index].tekst;  
  }
  constructor(private sanitizer:DomSanitizer, private comment:CommentVideoService) { }
  @Input() commentaar?:any;
  
  getUrl(post:any)
  {
   return this.sanitizer.bypassSecurityTrustResourceUrl(post);
  } 
  deleteComment(indexOne:number, indexTwo:number) {
   //  this.comment.deleteUserComment(indexOne,indexTwo);   
       this.users.splice(indexOne,indexTwo);
  }
  
  addComment(comments:string) {
    if(this.commentaar == "") {
      alert("Vul dit veld in.");
    } else{
      this.comment.addUserComment("G","Gael",comments);
      // clear textbox
      this.commentaar = ""; 
   
    }

  }
  ngOnInit(): void {
    this.users = this.comment.getUsersCommentsVideoOne();
  }

}
