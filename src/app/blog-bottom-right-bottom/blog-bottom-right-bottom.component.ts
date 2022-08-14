import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-bottom-right-bottom',
  templateUrl: './blog-bottom-right-bottom.component.html',
  styleUrls: ['./blog-bottom-right-bottom.component.scss']
})
export class BlogBottomRightBottomComponent implements OnInit {
  maintitle?:string = "Halo Infinite's Xbox-nummers glippen achter Roblox.";
  toptekst?: string ="343's shooter debuteerde als de meest gespeelde Xbox-game, maar het is niet langer de koning van de heuvel";
  linkImageOneN?:string = "https://wallpaperaccess.com/full/50035.jpg";
  textOnderEersteImg?:string = "Zoals hij in de video uitlegt, kun je het Super Mario-niveau in Old Town vinden. Je moet ongeveer halverwege het spel zijn om dit te doen, omdat je door de riolen moet reizen om toegang te krijgen tot dit deel van de wereld om aan Sector 0 van het verhaal te beginnen. Als je eenmaal in Old Town bent, ga je naar de uiterste zuidwestelijke hoek van de Old Town-kaart. Ga dan naar de top van dit hoge bakstenen huis:";
  textOnderTweedeImg?:string = "Als je daar bent, zoek je naar een schoorsteen met een groene pijp die eruit steekt. Dat is het universele symbool dat je dit kunt doen: En dan ga je naar de races!Net als veel andere Dying Light-paaseieren (en dat zijn er veel), is het Super Mario-podium schattig en zo. Maar weet je wat ik hier echt van wil? Een echte Super Mario-platformgame die Nintendo's geweldige third-person platformgame-mechanica naar een first-person perspectief transporteert - ongeveer op dezelfde manier waarop Dying Light Assassin's Creed-achtige parkour nam en er een first-person... hacker van maakte? Niet echt een shooter denk ik... Bedenk eens hoe cool vechtende goomba's zouden zijn! Zoals het verslaan van zombies in Dying Light, alleen trippy en schattig in plaats van gruwelijk en traumatisch. Ik zou ook een pc-mod accepteren waarbij je Dying Light-personage zegt: 'Ik ben een ik, Crane!' UPDATE (14:50 uur): Een lezer was geweldig genoeg om erop te wijzen dat er nog een, nog beter geheim met Super Mario-thema in het level zit. Als je bovenop de roze kubus springt, kun je een blauwdruk vinden voor iets dat het 'Pyza Suit' wordt genoemd, waarmee je rond Harran kunt glijden op de manier van Tanooki Suit. Hier is een video die laat zien waar je het kunt vinden:";
linkImageTwoN?:string = "https://images8.alphacoders.com/920/thumb-1920-920300.jpg";
 
 // second container
 imgOneSecondCon?:string = "https://images2.alphacoders.com/257/thumb-1920-257822.jpg";
 h2OneT?:string = "Halo Oneindige WTF & grappige momenten";
 h2TwoT?:string = "Halo Infinite";
 // iframeRight
 iframes:any = [
  "https://www.youtube.com/embed/czeGAdUzXlU",
  "https://www.youtube.com/embed/czeGAdUzXlU"
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
