import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  public menuItems: Array<string[]> = [["Home", "Startpagina", "Page d'accueil"],
                                       ["Blog", "Blog", "Blog"],
                                       ["Video", "Video", "Video"],
                                       ["Reviews", "Recensies", "Critiques"],
                                       ["About", "Over", "Pertinent" ]]

  constructor() { 

  }

  ngOnInit(): void {
  }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
