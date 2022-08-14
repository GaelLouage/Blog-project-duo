import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meest-populaire',
  templateUrl: './meest-populaire.component.html',
  styleUrls: ['./meest-populaire.component.scss']
})
export class MeestPopulaireComponent implements OnInit {
  lijstPopulaire:any = [
    {routerL:"blogOne",id:1,top:"Commentaar",title:"Lost Ark's weergave van vrouwelijke personages voelt een decennium achterhaald."},
    {routerL:"gameTips",id:2,top:"Nieuws",title:"Genshin Impact's miHoYo rebrands voor wereldwijd publiek"},
    {routerL:"Japan",id:3,top:"Japan",title:"Hideaki Anno Is Creating His Version Of The Marvel Universe But With Kaiju, Heroes, and Robots"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
