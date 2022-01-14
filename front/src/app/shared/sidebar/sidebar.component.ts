import { Component, ElementRef, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario;
  public tag: any;
  toggle:boolean = true;

  constructor( public sidebarService: SidebarService,
               private usuarioService: UsuarioService,
               private el: ElementRef) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // this.tag = document.getElementById('desplegar');
  }

  desplegar(){
    console.log("desplegar : ",this.toggle);
    this.toggle = !this.toggle;
  }



}
