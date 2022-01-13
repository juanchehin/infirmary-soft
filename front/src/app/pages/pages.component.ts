import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';
import { SidebarService } from '../services/sidebar.service';
// import { customInitFunctions } from "./customInitFunctions.1";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService,
               private sidebarService: SidebarService ) { }

  ngOnInit(): void {
    // customInitFunctions();
    this.sidebarService.cargarMenu();
  }

}
