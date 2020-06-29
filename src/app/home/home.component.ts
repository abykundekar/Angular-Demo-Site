import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = "aby"
  @Input() menus : Object
  constructor() { }

  ngOnInit(): void {
  }

  counterClick(){
    this.clickCounter += 1;
  }

  setClasses(){
    let myClasses = {
      active : this.name.length > 4,
      notactive : this.name.length <= 4
    }
    return myClasses;
  }


}
