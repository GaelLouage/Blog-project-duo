import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss']
})
export class NewGamesComponent implements OnInit {

  newGames:any = [
    {"link":"https://www.instant-gaming.com/en/2672-buy-dying-light-2-stay-human-pc-game-steam/","title":"Dying Ligth","game":"https://s3.gaming-cdn.com/images/products/2672/271x377/dying-light-2-stay-human-pc-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/8676-buy-farming-simulator-22-pc-mac-game-steam/","title":"Farming Simulator","game":"https://s1.gaming-cdn.com/images/products/8676/271x377/farming-simulator-22-pc-mac-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/7325-buy-god-of-war-pc-game-steam/","title":"God of War","game":"https://s3.gaming-cdn.com/images/products/7325/271x377/god-of-war-pc-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/8908-buy-pokemon-legends-arceus-switch-game-nintendo-eshop-europe/","title":"Pokemon","game":"https://s2.gaming-cdn.com/images/products/8908/271x377/pokemon-legends-arceus-switch-game-nintendo-eshop-europe-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/7893-buy-monster-hunter-rise-pc-game-steam/","title":"Monster Hunter","game":"https://s1.gaming-cdn.com/images/products/7893/271x377/monster-hunter-rise-pc-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/10155-buy-crusader-kings-iii-royal-court-dlc-pc-mac-game-steam/","title":"Crusader Kings","game":"https://s1.gaming-cdn.com/images/products/10155/271x377/crusader-kings-iii-royal-court-dlc-pc-mac-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/10217-buy-cities-skylines-airports-dlc-pc-mac-game-steam/","title":"Cities Skyline","game":"https://s3.gaming-cdn.com/images/products/10217/271x377/cities-skylines-airports-dlc-pc-mac-game-steam-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/4869-buy-rainbow-six-extraction-pc-game-ubisoft-connect-europe/","title":"Rainbow Six Siege","game":"https://s1.gaming-cdn.com/images/products/4869/271x377/rainbow-six-extraction-pc-game-ubisoft-connect-europe-cover.jpg"},
    {"link":"https://www.instant-gaming.com/en/4524-buy-gtfo-pc-game-steam/","title":"GTFO","game":"https://s1.gaming-cdn.com/images/products/4524/271x377/gtfo-pc-game-steam-cover.jpg"}
  ];
  
  constructor() { }
  /*scroll the games*/
  gameScroller(index:number){
    const games:any = document.querySelector(".container-games");
    games.scrollLeft += index;
    console.log('test');
  }

  ngOnInit(): void {
  }

}
