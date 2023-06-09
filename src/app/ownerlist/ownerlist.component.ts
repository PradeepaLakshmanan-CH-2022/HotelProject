import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})
export class OwnerlistComponent {
  constructor(private router:Router) {}

  ownerlist:any=[ 
  { 
    "TrainingID":101,  
    "TrainingName": "Digital Marketing "
 }, 
 { 
  "TrainingID":102,
  "TrainingName": "Finance"
  }, 
  { 
    "TrainingID":103,  
    "TrainingName": "Business Development "
   }, 
   { 
    "TrainingID":104, 
    "TrainingName": "Sales"
   }, 
    ] 

  
   
  
 
  GotoHall(value:any){
    this.router.navigate(['/hall',value])
  }
  refresh(){ 
    location.reload(); 

  } 

}
