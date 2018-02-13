import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-folder-contents',
  templateUrl: './folder-contents.component.html',
  styleUrls: ['./folder-contents.component.css']
})
export class FolderContentsComponent implements OnInit {
  folder;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,private dataService: DataService) {

   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dataService.getFiles(this.id)
        .subscribe(
          (data) => {
            this.folder = data
          }
        );
      }
    )
  }

}
