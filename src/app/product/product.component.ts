import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[DataService]
  
})
export class ProductComponent implements OnInit {
  
   data;
  mysvc:DataService;
  param;
  queryParams;

  constructor( dtaserv:DataService, private activatedRoute: ActivatedRoute){
    this.mysvc= dtaserv;

  }

  ngOnInit(): void {
    
    this.param = this.activatedRoute.snapshot.params['id1'];
    this.queryParams = this.activatedRoute.snapshot.queryParams['countr'];


    
    this.activatedRoute.queryParams.subscribe({
      next: (qparams)=>{
        this.queryParams = qparams['countr']
      }
     })

       this.activatedRoute.params.subscribe({
        next: (params)=>{
          this.param = params['id1']
        }
       })
     debugger
  }
  getData(id){

    this.data = this.mysvc.getData(id);

  }
}
