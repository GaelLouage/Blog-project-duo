import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  public menuItems: Array<string[]> = [["Home", "Startpagina", "Page d'accueil"],
                                       ["Blog", "Blog", "Blog"],
                                       ["Video", "Video", "Video"],
                                       ["Reviews", "Recensies", "Critiques"],
                                       ["About", "Over", "Pertinent" ]]

  constructor() { }

  ngOnInit(): void {

  }

  onToggleSidenav = () => {  
    this.sidenavToggle.emit();
  }

}
