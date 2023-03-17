import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  AddButtonCSSStyles() {
    let CssStyles = {        
        'color':'red',
        'font-weight': 'bold',
        'font-size.px': 20
    };
    return CssStyles;
  }

  students: any[] = [
    {
        Name: 'Preety', Branch: 'CSE', Gender: 'Female'
    },
    {
        Name: 'Anurag', Branch: 'ETC', Gender: 'Male'
    },
    {
        Name: 'Priyanka', Branch: 'CSE',  Gender: 'Female'
    },
    {
        Name: 'Hina', Branch: 'ETC', Gender: 'Female'
    },
    {
        Name: 'Sambit', Branch: 'CSE', Gender: 'Male'
    }
  ]; 


  


}
