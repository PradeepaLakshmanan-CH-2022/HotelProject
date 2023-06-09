import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halllist',
  templateUrl: './halllist.component.html',
  styleUrls: ['./halllist.component.css']
})
export class HalllistComponent {

  public trainingId:any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.trainingId=this.route.snapshot.params["id"];
    this.showhallList();
  
  }
  showhallList(){
    
  }
}
