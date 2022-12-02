import { Component, OnInit } from '@angular/core';
import { Capitulo } from 'src/app/model/capitulo';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit {

  capitulos !: Capitulo[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.capitulos = this.dataService.getDatos();
  }

}
