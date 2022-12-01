import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";
//import { ProductDataService } from "../product-data.service";

@Injectable({
    providedIn:'root'
})
export class ProductResolverService implements Resolve<any> {
    constructor(private service: DataService, private activatedRoute:ActivatedRoute) { }

    resolve( ) {

        return this.service.getData1();
    }
}