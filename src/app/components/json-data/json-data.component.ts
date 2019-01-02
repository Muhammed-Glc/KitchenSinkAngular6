import {Component, OnInit} from '@angular/core';
import {ReadJson} from "./read-json";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit {

  constructor( private http:HttpClient) { }
  path: string="https://jsonplaceholder.typicode.com/users";
  readJson:ReadJson[];

  ngOnInit() {
    this.http.get<ReadJson[]>(this.path).subscribe(
        response=> {
          this.readJson=response;

       /*   console.log(this.readJson[7].name)
          for(let i=0; i<this.readJson.length; i++)
          {
            console.log(this.readJson[i].name);

          }*/

        })



  /*  console.log("Selam")
    for (var val in this.readJson) {
      console.log(val)
      console.log("DATA")
    }
    */
  }

}
