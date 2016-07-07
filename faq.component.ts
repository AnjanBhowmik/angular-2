import {Component} from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    templateUrl:'/app/views/faq.component.html'
})
export class FaqComponent {
    isExpanded = false;
    constructor(private router:Router){
    }

    ngOnInit(){
        window.sessionStorage.getItem("name") ? "" : this.router.navigate(['login']);
    }
        
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}