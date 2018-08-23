import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed : boolean= true;

  clicked(event) {
    event.currentTarget.classList.remove('in'); // To Remove
  }


  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;

    
  }

}
