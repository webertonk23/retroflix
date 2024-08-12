import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // @Input() pageTitle: string = 'Teste';

  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Perfil', icon: 'pi pi-user', routerLink: '/settings/profile' },
      { label: 'Sair', icon: 'pi pi-sign-out', command: () => this.logout() }
    ];
  }

  logout() {
    // Adicione a lógica de logout aqui
  }
}
