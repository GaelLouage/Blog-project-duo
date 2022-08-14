import { Component, OnInit } from '@angular/core';
import { RoundedSocialComponent } from '../rounded-social/rounded-social.component';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

 
  social:string = ".container-3-partners";
    //container-3-partners
  constructor() { }
  // scrollSocial(index:number):void{
  //   const games:any = document.querySelector(this.social);
  //   games.scrollLeft = index;
  // }
  scrollSocial():void{
    const games:any = document.querySelector(this.social);
    games.scrollLeft -= 200;

  }

  scrollSocialRight() {
    const games:any = document.querySelector(this.social);
    games.scrollLeft += 200;
  }
  scrollSocialMiddel() {
    const games:any = document.querySelector(this.social);
    games.scrollLeft += 200;
   
  }

  ngOnInit(): void {
  }

}
