import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-bottom-middel-top',
  templateUrl: './blog-bottom-middel-top.component.html',
  styleUrls: ['./blog-bottom-middel-top.component.scss']
})
export class BlogBottomMiddelTopComponent implements OnInit {
  maintitle?:string = "Rapport: Warzone-ontwikkelaars: 'We hebben dingen verkloot. We hebben het gebroken.'";
  toptekst?: string ="In een ontmoeting met makers van inhoud gaven Call of Duty-ontwikkelaars toe dat de Battle Royale in slechte staat verkeerde";
  linkImageOneN?:string = "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/efad5df5c2958ae926cd6ee25e8588e3.jpg";
  textOnderEersteImg?:string = "In een gerapporteerde ontmoeting tussen Call of Duty-ontwikkelaars en geselecteerde contentmakers en influencers, gaven de Warzone-ontwikkelaars toe dat de gratis te spelen Battle Royale in een slechte staat verkeerde, waarbij ze de aanwezigen vertelden dat ze 'het hadden verkloot' en dat de huidige toestand van de populaire online shooter was 'beschamend'. De ontwikkelaars zeiden ook dat ze van plan waren om dingen te repareren. Vandaag meldde CharlieIntel dat tijdens een door Activision gehoste online ontmoeting tussen Call of Duty-ontwikkelaars en makers van inhoud, het team achter Warzone bot en open sprak over de vele, vele problemen en problemen waarmee de schutter te maken heeft gehad sinds de lancering van het nieuwe seizoen met Pacific-thema en kaart. “We hebben de boel verpest. We hebben het gebroken. We zijn er niet blij mee. Geen excuses', zeiden studiohoofd Pat Kelly van Infinity Ward, Activision-directeur Josh Bridge en Eric Biesmann van Raven Software tijdens het gesprek.  Kotaku nam contact op met Activision over de bijeenkomst en wat er tijdens de bijeenkomst werd gezegd, maar kreeg geen commentaar van de uitgever.";
  textOnderTweedeImg?:string = "Als je daar bent, zoek je naar een schoorsteen met een groene pijp die eruit steekt. Dat is het universele symbool dat je dit kunt doen: En dan ga je naar de races!Net als veel andere Dying Light-paaseieren (en dat zijn er veel), is het Super Mario-podium schattig en zo. Maar weet je wat ik hier echt van wil? Een echte Super Mario-platformgame die Nintendo's geweldige third-person platformgame-mechanica naar een first-person perspectief transporteert - ongeveer op dezelfde manier waarop Dying Light Assassin's Creed-achtige parkour nam en er een first-person... hacker van maakte? Niet echt een shooter denk ik... Bedenk eens hoe cool vechtende goomba's zouden zijn! Zoals het verslaan van zombies in Dying Light, alleen trippy en schattig in plaats van gruwelijk en traumatisch. Ik zou ook een pc-mod accepteren waarbij je Dying Light-personage zegt: 'Ik ben een ik, Crane!' UPDATE (14:50 uur): Een lezer was geweldig genoeg om erop te wijzen dat er nog een, nog beter geheim met Super Mario-thema in het level zit. Als je bovenop de roze kubus springt, kun je een blauwdruk vinden voor iets dat het 'Pyza Suit' wordt genoemd, waarmee je rond Harran kunt glijden op de manier van Tanooki Suit. Hier is een video die laat zien waar je het kunt vinden:";
linkImageTwoN?:string = "https://cdn.player.one/sites/player.one/files/2020/08/19/warzone.jpg";
 
 // second container
 imgOneSecondCon?:string = "https://images3.alphacoders.com/106/thumb-1920-1068952.jpg";
 h2OneT?:string = "Warzone Seizoen 2 Gameplay en impressies!";
 h2TwoT?:string = "WARZONE BESTE HOOGTEPUNTEN!";
 // iframeRight
 iframes:any = [
   "https://www.youtube.com/embed/4Tb_fGOng6w",
   "https://www.youtube.com/embed/zA0Xi5761PE"
 ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
