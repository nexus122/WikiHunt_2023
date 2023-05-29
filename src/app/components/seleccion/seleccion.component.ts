import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SearchResult } from './selection.component.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css'],
})
export class SeleccionComponent {
  search$?: Observable<SearchResult>;
  parametro!: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // Cuando se cargue la pagina, que lo haga con un parametro y nos cargue cosas
    this.route.params.subscribe(params => {
      this.parametro = params['name'];
      console.log(this.parametro);
      this.search$ = this.getData(this.parametro);
    });        
  }

  getData(searchParam: string):Observable<SearchResult> {
    console.log("Entra a pedir con: ", searchParam)
    return this.http.get<SearchResult>(
      `https://es.wikipedia.org/w/api.php?action=parse&page=${searchParam}&prop=links&format=json&origin=*`
    );
  }
}
