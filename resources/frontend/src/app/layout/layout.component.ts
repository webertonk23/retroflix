import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sideBarExpanded: boolean = false;
  pageTitle: string = '';

  constructor(private router: Router) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.updatePageTitle();
    //   }
    // });
  }

  toggleSidebar() {
    this.sideBarExpanded = !this.sideBarExpanded;
  }

  // updatePageTitle() {
  //   const route = this.router.url.split('/').pop();
  //   this.pageTitle = route ? route.charAt(0).toUpperCase() + route.slice(1) : 'Home';
  // }

  onActivate(event: any) {
    // Atualize o título da página ou execute outras ações necessárias
    this.pageTitle = event.constructor.name.replace('Component', '');
  }
}
