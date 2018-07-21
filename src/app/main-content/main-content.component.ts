import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filemaker-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
 colors = ['red','blue','green','yellow'];
 menuArray = {
   {menuName:'file',{

   }}
 }
  constructor() { }

  ngOnInit() {
  }

}
