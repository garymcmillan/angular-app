import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  data;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

      this.dataService.getData()
        .subscribe(
          (data) => this.data = data,
          (error) => console.log(error)
        );
  }

  selectFolder(id: string){
    this.router.navigate([id]);
  }

  sortABC(){
    this.data.sort( function(item1, item2) {
	    if ( item1.first_name < item2.first_name ){
	    	return -1;
	    }else if( item1.name > item2.name ){
	        return 1;
	    }else{
	    	return 0;
	    }
	});
  }

}
