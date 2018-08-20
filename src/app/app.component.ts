import { Component,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
//import { Router } from '@angular/router/src/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Globals } from './global';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app angular 2';
  
  name="a";

  type=['a1','a2','a3'];
  type1=[];
  arr: any[] = [
    
  ];
  arr1: any[] = [
    
  ];
  
  i=0;
  modal1=100;
  modalRef: BsModalRef;
  input;
  
  constructor(private router: Router,private modalService: BsModalService,private glob:Globals){

  }
  add()
  {
    if(this.i==0)
    {    this.arr[this.i]='1';
          this.arr1[this.i]='1';
    console.log(this.i);
    //console.log(this.type[this.i-1]);
    console.log(this.arr[this.i]);
    //console.log(this.type1[this.i-1]);
    console.log(this.arr1[this.i]);
        this.i++;
    }
    else{
      if(this.type[this.i-1]==undefined || this.type1[this.i-1]==undefined)
      {
        alert("add");
      }else{
      this.arr[this.i]=this.type[this.i-1];
      this.arr1[this.i]=this.type1[this.i-1];
    
    //this.i++;
    console.log(this.i);
    //console.log(this.type[this.i-1]);
    console.log(this.arr[this.i]);
    //console.log(this.type1[this.i-1]);
    console.log(this.arr1[this.i]);
    this.i++;
      }
  }}
  sub(pos)
  {
    // console.log(this.arr.length-1)
    // console.log(pos)
    if(this.arr.length-1==pos)
    {
      // this.arr[this.i]=this.type[this.i-1];
      // this.arr1[this.i]=this.type1[this.i-1];
      // this.i++;
      if(this.type[this.i-1]==undefined || this.type1[this.i-1]==undefined)
      {
        alert("cant remove");
      }
      else
      {
              this.arr[this.i]=this.type[this.i-1];
              this.arr1[this.i]=this.type1[this.i-1];
              console.log(this.arr[this.i]);
    //console.log(this.type1[this.i-1]);
              console.log(this.arr1[this.i]);
              this.i++;
              console.log("added")
              console.log(this.arr.splice(pos+1, 1));
              console.log(this.type.splice(pos, 1));
              console.log(this.arr1.splice(pos+1, 1));
              console.log(this.type1.splice(pos, 1));
              this.i--;
              console.log("removed")
      }
    }
    else{
    console.log(this.arr.splice(pos+1, 1));
    console.log(this.type.splice(pos, 1));
    console.log(this.arr1.splice(pos+1, 1));
    console.log(this.type1.splice(pos, 1));
    this.i--;
    }
  }  
  onClick()
  {
    this.router.navigateByUrl('/app1'); 
  }
  openModal(template: TemplateRef<any>) {
    console.log(this.glob.VAR1)
    this.modalRef = this.modalService.show(template);

  }
  evaluate(input)
  {
    let typearray="";
    for(let i=0;i<this.type.length-1;i++)
    {
      
      typearray=typearray+"'"+this.type[i]+"'"+',';
    }
    typearray=typearray+"'"+this.type[this.type.length-1]+"'";
      let input1=this.name+'('+typearray+')';
    console.log(input1);
    
    try
    {
      eval(input+input1)
    }
    catch(e)
    {
        alert(e.message);
    }

  }



}
