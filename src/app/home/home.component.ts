import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
home: boolean = true;
about: boolean = false;
portfolio: boolean = false;
services: boolean = false;
contact: boolean = false;
  constructor(){}

  ngOnInit(){}

  public selectedNav(activeLink : any): void{
    this.home = false;
    this.about = false;
    this.portfolio = false;
    this.services = false;
    this.contact = false;

    if(activeLink == 'home'){
    this.home =true;
  }else if(activeLink == 'about'){
  this.about =true;
}else if(activeLink == 'portfolio'){
  this.portfolio =true;
}else if(activeLink == 'services'){
  this.services =true;
}else if(activeLink == 'contact'){
  this.contact =true;
}
  }
}
