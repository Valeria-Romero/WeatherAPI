import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../conection/conection.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

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
