import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-bottom-bottom-left',
  templateUrl: './blog-bottom-bottom-left.component.html',
  styleUrls: ['./blog-bottom-bottom-left.component.scss']
})
export class BlogBottomBottomLeftComponent implements OnInit {
  maintitle?:string = "Geheim Super Mario-niveau gevonden.";
  toptekst?: string ="Het nieuwste Dying Light-paasei dat is blootgelegd, vervoert spelers naar een Super Mario-achtig stadium, alleen met veel meer zombies erin. YouTuber Arekkz Gaming ontdekte het geheime portaal naar zombie goomba (zomgoomba? goomzombie?) die goedheid doodde, en was zo vriendelijk om ons allemaal te laten zien waar we het konden vinden:";
  linkImageOneN?:string = "https://images6.alphacoders.com/912/thumb-1920-912386.png";
  textOnderEersteImg?:string = "Zoals hij in de video uitlegt, kun je het Super Mario-niveau in Old Town vinden. Je moet ongeveer halverwege het spel zijn om dit te doen, omdat je door de riolen moet reizen om toegang te krijgen tot dit deel van de wereld om aan Sector 0 van het verhaal te beginnen. Als je eenmaal in Old Town bent, ga je naar de uiterste zuidwestelijke hoek van de Old Town-kaart. Ga dan naar de top van dit hoge bakstenen huis:";
  textOnderTweedeImg?:string = "Als je daar bent, zoek je naar een schoorsteen met een groene pijp die eruit steekt. Dat is het universele symbool dat je dit kunt doen: En dan ga je naar de races!Net als veel andere Dying Light-paaseieren (en dat zijn er veel), is het Super Mario-podium schattig en zo. Maar weet je wat ik hier echt van wil? Een echte Super Mario-platformgame die Nintendo's geweldige third-person platformgame-mechanica naar een first-person perspectief transporteert - ongeveer op dezelfde manier waarop Dying Light Assassin's Creed-achtige parkour nam en er een first-person... hacker van maakte? Niet echt een shooter denk ik... Bedenk eens hoe cool vechtende goomba's zouden zijn! Zoals het verslaan van zombies in Dying Light, alleen trippy en schattig in plaats van gruwelijk en traumatisch. Ik zou ook een pc-mod accepteren waarbij je Dying Light-personage zegt: 'Ik ben een ik, Crane!' UPDATE (14:50 uur): Een lezer was geweldig genoeg om erop te wijzen dat er nog een, nog beter geheim met Super Mario-thema in het level zit. Als je bovenop de roze kubus springt, kun je een blauwdruk vinden voor iets dat het 'Pyza Suit' wordt genoemd, waarmee je rond Harran kunt glijden op de manier van Tanooki Suit. Hier is een video die laat zien waar je het kunt vinden:";
linkImageTwoN?:string = "https://cdn.wallpapersafari.com/97/53/e5DqVO.jpg";
 
 // second container
 imgOneSecondCon?:string = "https://i.pinimg.com/originals/32/ef/71/32ef711d735719c31d084c57aa13abab.jpg";
 h2OneT?:string = "Super Mario Party Minigames";
 h2TwoT?:string = "Mario Vs. Wario Vs. Peach Vs. Daisy";
 // iframeRight
 iframes:any = [
   "https://www.youtube.com/embed/XzJrFmlhWb0",
   "https://www.youtube.com/embed/7qWGu5X1Rq0"
 ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
