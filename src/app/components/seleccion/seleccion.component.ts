import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css'],
})
export class SeleccionComponent {
  search$: any = {};
  constructor(private http: HttpClient) {
    this.search$ = this.getData('Adolf Hitler').pipe(
      map((data: any) => data.query.search)
    );
  }

  getData(searchParam: string) {
    return this.http.get(
      `https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${searchParam}`
    );
  }
}
