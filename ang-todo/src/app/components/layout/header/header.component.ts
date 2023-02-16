import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  toggletext: string = "Dark Mode";
  darkMode: boolean = false;

  toggleMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.toggletext = "Light Mode";
    }
    else {
      this.toggletext = "Dark Mode";
    }

    document.documentElement.classList.toggle("dark");
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    this.darkMode = false;
  }

}
