import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rounded-social',
  templateUrl: './rounded-social.component.html',
  styleUrls: ['./rounded-social.component.scss']
})
export class RoundedSocialComponent implements OnInit {


  @Output() btnScrollLeft = new EventEmitter();
  @Output() btnScrollCenter = new EventEmitter();
  @Output() btnScrollRight = new EventEmitter();
  constructor() { }

  onClickLeft(){
    this.btnScrollLeft.emit();
  }
  onClickMiddel() {
    this.btnScrollCenter.emit();
  }
  onClickRigth() {
    this.btnScrollRight.emit();
  }
  ngOnInit(): void {
  }

}
