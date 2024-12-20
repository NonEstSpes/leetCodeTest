import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, mergeMap, Observable, tap} from 'rxjs';
import {LanguageForApi, Request, RunStatus} from '../type/IDictionaryLanguge';

@Injectable({
  providedIn: 'root'
})
export class RunCodeService {
  private apiUrl: string = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
  public request$: Observable<Request> = new Observable<Request>();
  private clientSecret = {"client-secret": '6de7b2bdc836e9547b7fe823404a339907272751'}

  constructor(private http: HttpClient) { }

  public runCode(sourceCode: string, language: string): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ...this.clientSecret
    });

    let body = {
        lang: Object.entries(LanguageForApi)
          .find(([key, _]) => key === language)?.[1],
        source: sourceCode,
        input: "",
        memory_limit: 243232,
        time_limit: 5,
        context: "",
        callback: "http://egorbo6a.beget.tech/"
    }
    this.request$ = this.http.post<Request>(`${this.apiUrl}`, body, {headers})
      .pipe(
        mergeMap(request => this.statusUpdate(request.status_update_url)),
        tap()
      )
  }

  public getOutput(url: string | undefined) {
    if (!url) return new BehaviorSubject<string>('Load...')
    const headers = new HttpHeaders({
      ...this.clientSecret
    });
    return this.http.get(url, {headers})
  }

  public statusUpdate(url: string) {
    const headers = new HttpHeaders({
      ...this.clientSecret
    })
    console.log(url)
    return this.http.get<Request>(url, {headers})
  }
}
