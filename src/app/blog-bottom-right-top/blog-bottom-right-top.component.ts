import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-bottom-right-top',
  templateUrl: './blog-bottom-right-top.component.html',
  styleUrls: ['./blog-bottom-right-top.component.scss']
})
export class BlogBottomRightTopComponent implements OnInit {
  maintitle?:string = "2022 Clash Schedule";
  toptekst?: string ="Met het seizoen 2022 voor de deur kijken we ook naar een nieuw jaar van Clash! Om je de tijd te geven die je nodig hebt om je teams te coördineren, is hier ons geplande toernooischema voor het jaar. Lock-in voor de Ionia Cup begint vandaag, dus grijp je groepen en schrijf je nu in! Meer weten over Clash? Bekijk onze Clash-FAQ.";
  linkImageOneN?:string = "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt695fc2c615722d64/620496c3fa8b30252c9f839a/021422_Clash2020Schedule_Banner.jpg";
  textOnderEersteImg?:string = "Riot Games, de makers van League of Legends en online shooter Valorant, heeft zijn excuses aangeboden aan fans van laatstgenoemde nadat een tweet leek te laten zien dat een van de personages van de game geniet van het werk van een NFT-artiest. Zoals Polygon meldt, plaatste het socialemediateam van Valorant onlangs een afbeelding van een van de personages uit de game, Killjoy, die een bezoek bracht aan een plaatselijk museum in Berlijn, waar ze het werk van Martin Houra, een kunstenaar wiens werk wordt verkocht als NFT's, in zich opneemt. De sociale media van Riot zijn geen onbekende in dit soort zogenaamd relatable, vierde-muur-overschrijdend werk; vorig jaar voerde het bedrijf een hele campagne rond Seraphine, een League of Legends-personage dat op Instagram en Twitter zou posten over alles, van haar angsten tot genocide, een tactiek die ondanks lof van sommige fans ook een beetje veel overkwam. Hoe dan ook, in dit geval, wat begon als een poging tot iets soortgelijks, eindigde in een complete ramp, met zoveel fans die terugschoten dat het bedrijf eerst de tweet volledig verwijderde en vervolgens een uitleg gaf: gerelateerde verhalen";
  textOnderTweedeImg?:string = "Ik weet eerlijk gezegd niet zeker hoe je niet weet dat Houra's werken specifiek zijn gemaakt voor NFT-verkopen wanneer de website van de gast wordt geopend met zijn beweringen dat zijn werken 'voor altijd op de Ethereum-blockchain leven', en dan snel rechtstreeks linkt naar een Opensea-galerij, maar hey, ik ben maar een man, geen medewerker van sociale media voor een videogamestudio. Ze hebben in ieder geval de tweet verwijderd en een waardevolle les geleerd over de mening van hun fans over NFT's!";
linkImageTwoN?:string = "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/146ae3b698ee6335ba19f0950b5985f3.jpg";
 
 // second container
 imgOneSecondCon?:string = "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt09448f5001a42920/6201e6bb9d6c325fc227f00e/021122_QuickGameplayThoughs_Banner.jpg";
 h2OneT?:string = "Zeri Kampioen in de schijnwerpers";
 h2TwoT?:string = "Een nieuwe dag";
 // iframeRight
 iframes:any = [
  "https://www.youtube.com/embed/VcaUG8hV9SU",
  "https://www.youtube.com/embed/vzHrjOMfHPY"
 ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
