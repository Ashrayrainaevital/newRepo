import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  fetch(form){
      const headers = new HttpHeaders({
        'patient_id': "yxu0Bh1hNM61K3b7t7+vlw==",
        'apikey': "z7mv1f863ODBaTHMPxvcqkWM6hOXtVLU"
       })
    
   
   return this.http.post("https://dev-api.evitalrx.in/v1/patient/orders/place_order",form.value)

  }
  show(orderId){
   return this.http.post("https://dev-api.evitalrx.in/v1/patient/orders/list",{
      'apikey':'z7mv1f863ODBaTHMPxvcqkWM6hOXtVLU',
      'order_id':orderId
    })
  }
id(mobileNumber){
 return this.http.post('https://dev-api.evitalrx.in/v1/fulfillment/patients/view',{
    'apikey':'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3',
    'mobile':mobileNumber

  })
}
}
