import { Component, OnInit } from '@angular/core';
import { Capitulo } from 'src/app/model/capitulo';
import { Introduccion } from 'src/app/model/introduccion';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introduccion !: Introduccion;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.introduccion = this.dataService.getIntro();
  }

}
