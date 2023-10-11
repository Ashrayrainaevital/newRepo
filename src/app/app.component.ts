import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'order';
  show:boolean=true
  toggle:boolean=false;
  form: FormGroup;
  order_id:any;
  newdata:any;
  Allorders:any;
  orders:any;
  count:number=0;
  patientId:string;
  number:any;
  mobileNumber:any;
  patientData:any;
  id:any;

  constructor(private service :ServiceService,
    private router:Router) {

  }
  ngOnInit() {
    console.log(this.patientId,"again")
 
    let Pid=this.patientId
    this.form = new FormGroup({
      'apikey': new FormControl("z7mv1f863ODBaTHMPxvcqkWM6hOXtVLU"),
      'patient_id': new FormControl(this.patientId),
    
      'items': new FormControl('[{"medicine_id":"gv0GokYn9w4zFL51eouS2g==","quantity":50}]'),
      'delivery_type': new FormControl("pickup"),
      'address': new FormControl(""),
      'city': new FormControl(''),
      'state': new FormControl(""),
      'zipcode': new FormControl("",[Validators.required,Validators.minLength(6)]),
      'parent_patient_id':new FormControl("yxu0Bh1hNM61K3b7t7+vlw==")

    })
  }
  up(){
    
    this.count = this.count+1
    console.log(this.count)
    if (this.count==10 ){
    this.number=document.getElementById("num") as HTMLInputElement
   this.mobileNumber=this.number.value
   console.log(this.mobileNumber,"num")
   this.service.id(this.mobileNumber).subscribe((data)=>{this.patientData=data
    this.patientId=this.patientData.data[0].patient_id
    console.log(console.log(typeof(this.patientId)))
   




  })
  
  //  this.patientId=this.patientData.data.patient_id


      
    }
    
  }
  onSubmit(form) {
    console.log("workin")
    console.log(this.form)
    this.service.fetch(form).subscribe((data)=>{
      console.log(data)
      this.newdata=data
    })
    if(form.valid){
       this.toggle=true
    }
  }
  view()
  {if(this.form.valid)
    this.show=false;
    this.order_id=this.newdata.data.order_id
    this.service.show(this.order_id).subscribe((data)=>{

      this.Allorders=data
     this.orders=this.Allorders.data.results
     console.log(this.orders)
    })
  }

  deliverys = ['pickup', 'delivery']


}
