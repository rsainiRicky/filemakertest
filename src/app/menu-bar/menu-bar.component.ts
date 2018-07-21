import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filemaker-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
 appName = 'FileMaker';
  constructor() { }

  ngOnInit() {
  }

}
