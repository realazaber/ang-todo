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
      this.toggletext = "Dark Mode";
    }
    else {
      this.toggletext = "Light Mode";
    }

    alert("Toggle mode\n" + this.darkMode + "\n" + this.toggletext);
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    this.darkMode = false;
  }

}
