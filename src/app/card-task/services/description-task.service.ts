import { Injectable } from '@angular/core';
import {map, mergeMap, Observable} from 'rxjs';
import {Tasks} from '../type/IDictionaryLanguge';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const URL = 'https://nonestspes.github.io:3000/leetCodeTest';

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
    this.currentTasks$ = this.http.get<Tasks[]>(`${URL}/tasks`, {params: {id: taskId}}).pipe(
      map((tasks: Tasks[]) => tasks[0])
    );
  }

  public updateSolved() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    this.currentTasks$.pipe(
      mergeMap(res => {
          return this.http.patch(`${URL}/tasks/${0}/`,
            {
              ...res,
              isSolved: true
            },
            {headers}
          )
        }
      )
    ).subscribe()
  }
}
