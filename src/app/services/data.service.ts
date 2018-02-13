import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: HttpClient){
  }

  getData(){
    return this.http.get('assets/data.json')
    .map(
      (response: Response) => {
        const data = response;
        return data;
      }
    );
  }
  
  getFiles(id: number){
    return this.http.get('assets/data.json')
    .map(
      (response) => {
        const data: any[] = response;
        for(let folder of data){
          if(folder.id == id){
            return folder;
          }
        }
      }
    );
  }
}
