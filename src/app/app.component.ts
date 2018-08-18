import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed : boolean= true;

  constructor(private el: ElementRef) {
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    let myTag = this.el.nativeElement.querySelector("i");
    if(myTag.classList.contains('glyphicon-plus'))
    {
      myTag.classList.remove('glyphicon-plus'); 
      myTag.classList.add('glyphicon-minus'); 
    }else{
      myTag.classList.remove('glyphicon-minus'); 
      myTag.classList.add('glyphicon-plus');
    }
  }

}
