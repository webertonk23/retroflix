import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ConsolesComponent } from '../pages/consoles/consoles.component';
import { RomsComponent } from '../pages/roms/roms.component';
import { EmulatorComponent } from '../emulator/emulator.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    ConsolesComponent,
    RomsComponent,
    EmulatorComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    StyleClassModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    MenubarModule,
    AvatarModule,
    MenuModule,
    PanelMenuModule,
    CardModule
  ]
})
export class LayoutModule { }