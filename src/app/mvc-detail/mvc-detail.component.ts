import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-mvc-detail',
  templateUrl: './mvc-detail.component.html',
  styleUrls: ['./mvc-detail.component.css']
})
export class MvcDetailComponent implements OnInit {
  tutorialtitle:string="";
  //route: ActivatedRouteSnapshot;
  id:any;
  tutimg:string;
  constructor(private route: ActivatedRoute) {
    // this.id = this.route.params['id'];
    // console.log(this.route.params['id']);
    // this.tutimg="../assets/MVC/MVCDay"+this.id+".jpg" 

   }
   ngOnInit() {
     this.id = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.tutimg="../assets/MVC/MVCDay"+this.id+".jpg" ;
    });
   }
    
}
