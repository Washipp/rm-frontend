import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Resource {
  id?: number;
  name: string;
  description: string;
  lastEdit: Date;
}

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent {
  configUrl = 'http://localhost:8080/RM_v2/api/resource';
  values: Array<Resource> = [];
  response: string;
  status: number;

  constructor(private http: HttpClient) {
    http.get(this.configUrl).subscribe((res: Response) => {
      this.status = res.status;
      this.values = (JSON.parse(JSON.stringify(res)));
    });
  }

  delete(id) {
    const url = `${this.configUrl}/${id}`;
    this.http.delete(url).subscribe((res: Response) => {
      this.status = res.status;
      this.response = (JSON.parse(JSON.stringify(res)));
      this.values.splice(id, 1);
      console.log('deleting');
    });
  }
}
