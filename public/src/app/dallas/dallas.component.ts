import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../conection/conection.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  info:any = {}

  constructor( private _HttpService: ConectionService ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo():void{
    this._HttpService.requestDallas()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info)
    });
  }

}
