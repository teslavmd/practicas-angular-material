import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listUsuario : Usuarios[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo' , 'acciones'];
  dataSource! : MatTableDataSource<any>;

  constructor(
    private usuarioService : UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.listUsuario = this.usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(id : number){
    this.usuarioService.eliminarUsuario(id);
    this.cargarUsuarios();
  }


}
