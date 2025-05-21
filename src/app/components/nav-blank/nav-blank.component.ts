import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-blank',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.css'
})
export class NavBlankComponent {
 constructor(private router: Router) {} 

  signOut() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']); 
  }
}
