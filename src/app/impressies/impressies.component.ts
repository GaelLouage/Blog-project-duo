import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressies',
  templateUrl: './impressies.component.html',
  styleUrls: ['./impressies.component.scss']
})
export class ImpressiesComponent implements OnInit {
  maintitle?:string = "Goed nieuws, Horizon Forbidden West speelt prima en ziet er nog steeds prachtig uit op de basis PS4";
  toptekst?: string ="Het nieuwste open-wereldavontuur van Guerrilla Games ziet er het beste uit op PS5, maar werkt nog steeds prima op oude hardware";
  linkImageOneN?:string = "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/2dc7f85178b9841378fd07511a1c467a.jpg";
  textOnderEersteImg?:string = "Lost Ark is een van de weinige games op Steam geworden die meer dan 1 miljoen gelijktijdige spelers bereikt. Niet alleen dat, maar de Diablo-achtige MMO heeft DOTA 2 nu overtroffen om een ​​van de meest gespeelde games in de hele geschiedenis van Steam te worden. Oorspronkelijk werd Lost Ark, een gratis te spelen ARPGMMO, in 2019 in Zuid-Korea uitgebracht voor pc. Nadat hij daar enorm succes had geboekt, ging Lost Ark-uitgever Smilegate een partnerschap aan met Amazon om het populaire spel naar de VS en Europa te brengen. Het werd een paar dagen geleden gelanceerd in een betaalde vroege toegangsperiode, vóór de officiële gratis te spelen release. En zelfs met een paywall vooraan, was het nog steeds in staat om binnen een paar uur meer dan 500.000 spelers te verzamelen, waardoor het een van de meest populaire nieuwe games op Steam werd. Nu, na wat wankele problemen met de lanceringsdag en serverproblemen, is Lost Ark officieel gratis voor iedereen beschikbaar. En het lijkt erop dat veel mensen enthousiast zijn om erin te springen en te spelen. Op het moment dat ik dit schrijf, heeft Lost Ark 1.297.896 spelers bereikt, waarmee het het hoogste aantal gelijktijdige spelers van DOTA 2 op Steam van 1.295.114 overtreft. Dat maakt het nu de derde meest gespeelde game in de Steam-geschiedenis op basis van actieve gelijktijdige spelers.";
  textOnderTweedeImg?:string = "Origineel verhaal volgt: Het bevindt zich nu direct achter Counter-Strike Global Offensive en zijn record van 1,3 miljoen gelijktijdige spelers. Het lijkt heel goed mogelijk dat Lost Ark ook dat nummer zal passeren. Hoewel het bijna onmogelijk lijkt dat het in staat zal zijn om het ongelooflijke gelijktijdige spelerrecord van PUBG te breken toen het de populairste game ter wereld was. Het record staat nog steeds op iets meer dan 3,2 miljoen spelers. Ik betwijfel of Lost Ark dat overtreft, maar de tijd zal het leren.Als je meer wilt weten over wat Lost Ark is, kun je mijn recent gepubliceerde impressies van de game eerste 12 uur lezen. Ik was onder de indruk van hoe geweldig de gevechten aanvoelden en hoe het gemeenschappelijke MMO-functies samenvoegde met ARPG-mechanica. Het algemene verhaal is een beetje saai, maar je zult waarschijnlijk toch naar een podcast luisteren terwijl je deze game speelt, dus wat maakt dat uit. ";
 linkImageTwoN?:string = "https://images6.alphacoders.com/910/thumb-1920-910352.jpg";
 
 // second container
 imgOneSecondCon?:string = "https://wallpaperaccess.com/full/1791093.jpg";
 h2OneT?:string = "Horizon Forbidden West - Digital Foundry Tech Review - A PS5 Graphics Masterclass";
 h2TwoT?:string = "Horizon Forbidden West Review - Nog beter dan Zero Dawn";
 // iframeRight
 iframes:any = [
   "https://www.youtube.com/embed/7nx07YAI0zQ",
   "https://www.youtube.com/embed/AtTLrfdchoo"
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
