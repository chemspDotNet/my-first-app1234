import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class TestService{
    messge= 'Hello Class'

    greet() {
        return this.messge
    }
}