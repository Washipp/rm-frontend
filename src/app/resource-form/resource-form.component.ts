import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent {

  public val: string;

  constructor(http: HttpClient) {
    console.log('test');
    http.get('http://localhost:8080/RM_v2/api/resource').subscribe(
      response => {
        console.log(response);
        this.val = JSON.stringify(response);
      });
  }


}
