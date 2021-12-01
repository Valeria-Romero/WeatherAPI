import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../conection/conection.service';


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  info:any = {}

  constructor( private _HttpService: ConectionService ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo():void{
    this._HttpService.requestBurbank()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info)
    });
  }

}
