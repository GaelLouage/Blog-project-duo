import { Component, OnInit } from '@angular/core';
// iframe 
@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.scss']
})
export class BlogOneComponent implements OnInit {
 maintitle?:string = "Lost Ark vestigt nieuw gelijktijdig spelersrecord op Steam, met meer dan 1,3 miljoen online [Update]";
 toptekst?: string ="De ARPG van Smilegate en Amazon heeft meer dan 1 miljoen spelers op Steam, minder dan 48 uur na de lancering";
 linkImageOneN?:string = "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/42048614bc4b4f3745fba932c38aeb01.jpg";
 textOnderEersteImg?:string = "Lost Ark is een van de weinige games op Steam geworden die meer dan 1 miljoen gelijktijdige spelers bereikt. Niet alleen dat, maar de Diablo-achtige MMO heeft DOTA 2 nu overtroffen om een ​​van de meest gespeelde games in de hele geschiedenis van Steam te worden. Oorspronkelijk werd Lost Ark, een gratis te spelen ARPGMMO, in 2019 in Zuid-Korea uitgebracht voor pc. Nadat hij daar enorm succes had geboekt, ging Lost Ark-uitgever Smilegate een partnerschap aan met Amazon om het populaire spel naar de VS en Europa te brengen. Het werd een paar dagen geleden gelanceerd in een betaalde vroege toegangsperiode, vóór de officiële gratis te spelen release. En zelfs met een paywall vooraan, was het nog steeds in staat om binnen een paar uur meer dan 500.000 spelers te verzamelen, waardoor het een van de meest populaire nieuwe games op Steam werd. Nu, na wat wankele problemen met de lanceringsdag en serverproblemen, is Lost Ark officieel gratis voor iedereen beschikbaar. En het lijkt erop dat veel mensen enthousiast zijn om erin te springen en te spelen. Op het moment dat ik dit schrijf, heeft Lost Ark 1.297.896 spelers bereikt, waarmee het het hoogste aantal gelijktijdige spelers van DOTA 2 op Steam van 1.295.114 overtreft. Dat maakt het nu de derde meest gespeelde game in de Steam-geschiedenis op basis van actieve gelijktijdige spelers.";
 textOnderTweedeImg?:string = "Origineel verhaal volgt: Het bevindt zich nu direct achter Counter-Strike Global Offensive en zijn record van 1,3 miljoen gelijktijdige spelers. Het lijkt heel goed mogelijk dat Lost Ark ook dat nummer zal passeren. Hoewel het bijna onmogelijk lijkt dat het in staat zal zijn om het ongelooflijke gelijktijdige spelerrecord van PUBG te breken toen het de populairste game ter wereld was. Het record staat nog steeds op iets meer dan 3,2 miljoen spelers. Ik betwijfel of Lost Ark dat overtreft, maar de tijd zal het leren.Als je meer wilt weten over wat Lost Ark is, kun je mijn recent gepubliceerde impressies van de game eerste 12 uur lezen. Ik was onder de indruk van hoe geweldig de gevechten aanvoelden en hoe het gemeenschappelijke MMO-functies samenvoegde met ARPG-mechanica. Het algemene verhaal is een beetje saai, maar je zult waarschijnlijk toch naar een podcast luisteren terwijl je deze game speelt, dus wat maakt dat uit. ";
linkImageTwoN?:string = "https://images6.alphacoders.com/910/thumb-1920-910352.jpg";

// second container
imgOneSecondCon?:string = "https://images7.alphacoders.com/632/thumbbig-632758.webp";
h2OneT?:string = "Ark Survival Evolved";
h2TwoT?:string = "Impressies Forza Horizon";
// iframeRight
iframes:any = [
  "https://www.youtube.com/embed/4vbrUuwYhOU",
  "https://www.youtube.com/embed/lbzdgfyb58g"
];
 
 constructor() { }

  ngOnInit(): void {
  }

}
