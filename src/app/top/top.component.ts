import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
 img:any = [
  {"id":0,"game":"https://external-preview.redd.it/HiFkqFsaABfl4bqXdTTwnNSytzw9CRtMtSUWeGhDEh0.jpg?auto=webp&s=bacf2a5396cde1cc5575c1d7ff23ca1ea6f7e983", "src": "../../assets/images/Top_Image1.jpg"},
  {"id":1,"game":"https://wallpaperaccess.com/full/480714.jpg", "src": "../../assets/images/Top_Image2.jpg"},
  {"id":2,"game":"https://preview.redd.it/c80pgq3hee331.jpg?auto=webp&s=97bd467ea4e1cdf9b97b3bf85a92f26bff68f195", "src": "../../assets/images/Top_Image3.jpg"},// correct format
  {"id":3,"game":"https://www.gamepitt.co.uk/wp-content/uploads/2021/05/Dying-Light-2-Press-banner.jpg", "src": "../../assets/images/Top_Image4.jpg"} // correct format
 ];
  constructor() { }
  currentImg:string = this.img[0].game;

  changeImg(index:number) {
    this.currentImg  = this.img[index].game;
  }
 
  ngOnInit(): void {
  }

}
