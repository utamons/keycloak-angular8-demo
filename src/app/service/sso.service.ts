import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class SsoService {
  constructor(private http: HttpClient) {
  }

  urlUser1 = 'http://localhost:4200/api/user1';
  urlUser2 = 'http://localhost:4200/api/user2';

  getUser1(): Observable<string> {
    return this.http.get(this.urlUser1, {responseType: 'text'})
      .pipe();
  }

  getUser2(): Observable<string> {
    return this.http.get(this.urlUser2, {responseType: 'text'})
      .pipe();
  }
}
