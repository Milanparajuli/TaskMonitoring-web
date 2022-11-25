import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  apiEndPoint: string = 'task';
  apiEditEndPoint:string = 'task/by-id'
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  addTask(task: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiEndPoint),
      task
    );
  }

  editTask(task: any): Observable<any> {
    return this.httpClient.put<any>(
      this.baseUrl.concat(this.apiEndPoint),
      task
    );
  }

  listTaskById(id: any): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.apiEditEndPoint).concat('/' + id)
    );
  }

  listAllTask(task: any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl.concat(this.apiEndPoint));
  }
}
