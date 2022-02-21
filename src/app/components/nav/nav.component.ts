import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  quieto: boolean = true;
  menu: any;
  a: any
  ngOnInit(): void {
    var y:any;
    window.onscroll = function() {
      y = window.scrollY;
      console.log(y);
    };
    setInterval(() => {
      if(y > 100){
        this.quieto = false;
      }else{
        this.quieto = true;
      }
    }, 500);
  }
}
