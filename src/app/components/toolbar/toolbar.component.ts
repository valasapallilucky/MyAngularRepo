import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  menuItems=[{link:'home', name:'Home'},
    {link:'js-programs', name:'Programming'},
    {link:'js-theory', name:'JSTheory'},
    {link:'angular', name:'Angular'},
    {link:'html', name:'HTML'},
    {link:'css', name:'CSS'},
    {link:'storage', name:'Storage'}
  ]
    
    ngOnInit(){

    }
}
