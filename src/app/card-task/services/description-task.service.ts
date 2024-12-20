import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Tasks} from '../type/IDictionaryLanguge';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DescriptionTaskService {
  public currentTasks$: Observable<Tasks> = new Observable();

  constructor(private http: HttpClient) { }

  public getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${URL}/tasks`);
  }

  public getTaskById(taskId: number): void {
    this.currentTasks$ = this.http.get<Tasks[]>(`${URL}/tasks/`, {params: {id: taskId}}).pipe(
      map((tasks: Tasks[]) => tasks[0])
    );
  }
}
