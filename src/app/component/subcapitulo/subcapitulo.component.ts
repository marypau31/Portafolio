import { Component, Input, OnInit } from '@angular/core';
import { SubCapitulo } from 'src/app/model/subcapitulo';

@Component({
  selector: 'app-subcapitulo',
  templateUrl: './subcapitulo.component.html',
  styleUrls: ['./subcapitulo.component.css']
})
export class SubcapituloComponent implements OnInit {

  @Input() subCapitulos !: SubCapitulo[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
