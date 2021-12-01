import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../conection/conection.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  info:any = {}

  constructor( private _HttpService: ConectionService ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo():void{
    this._HttpService.requestWashington()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info)
    });
  }

}
