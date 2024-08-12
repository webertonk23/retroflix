import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      label: 'Consoles',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/console']
    },
    // {
    //   label: 'Settings',
    //   icon: 'pi pi-fw pi-cog',
    //   items: [
    //     {
    //       label: 'Profile',
    //       icon: 'pi pi-fw pi-user',
    //       routerLink: ['/settings/profile']
    //     },
    //     {
    //       label: 'Preferences',
    //       icon: 'pi pi-fw pi-sliders-h',
    //       routerLink: ['/settings/preferences']
    //     }
    //   ]
    // },
    {
      label: 'Pessoas',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/pessoas']
    }
  ];

  activeSubmenu: string | null = null;

  toggleSubmenu(name: string) {
    this.activeSubmenu = this.activeSubmenu === name ? null : name;
  }
}
