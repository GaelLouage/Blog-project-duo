import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lineheaders',
  templateUrl: './lineheaders.component.html',
  styleUrls: ['./lineheaders.component.scss']
})
export class LineheadersComponent implements OnInit {
 @Input() woord?:string;
 @Input() first?:boolean = false;
  constructor() { }

  // changeWoord(input:string) :void {
  //   this.woord = input;
  // }
  ngOnInit(): void {

  }

}
