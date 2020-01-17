import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class SsoService {
  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:4200/api/test';

  getTest(): Observable<string> {
    const httpOptions = {
      responseType: 'text'
    };
    return this.http.get(this.url, {responseType: 'text'})
      .pipe();
  }
}
